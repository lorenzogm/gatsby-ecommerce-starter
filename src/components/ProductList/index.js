import React from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { useThemeContext } from 'context/ThemeContext'
import { useProductsContext } from 'context/ProductsContext'
import Link from 'components/Link'
import ImageLocal from 'components/ImageLocal'

import * as S from './styles'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'
import filterProductList from './filterProductList'

const ProductList = ({ filters }) => {
  const { isMobile } = useThemeContext()
  const { products, skus, productsIdsAll, productsIdsByCategory } = useProductsContext()

  const productsListFiltered = filterProductList({ productsIdsAll, productsIdsByCategory, filters })

  return (
    <GridList cols={isMobile ? 2 : 4} cellHeight="auto">
      {productsListFiltered.map((productId) => (
        <GridListTile key={productId}>
          <Link to={`/${skus[products[productId].skuDefaultId].fields.slug}`}>
            <ImageLocal localFiles={products[productId].localFiles} alt={products[productId].name} />
            <S.ProductDetails $isMobile={isMobile}>
              <ProductName product={products[productId]} />
              <ProductPrice product={products[productId]} />
            </S.ProductDetails>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  )
}

ProductList.propTypes = {
  filters: PropTypes.shape({
    categoryIds: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
}

ProductList.defaultProps = {
  filters: {},
}

export default ProductList
