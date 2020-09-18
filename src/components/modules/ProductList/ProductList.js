import React from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { useThemeContext } from 'context/ThemeContext'
import { useProductsContext } from 'context/ProductsContext'
import Link from 'components/foundations/Link/Link'
import ImageLocal from 'components/foundations/ImageLocal/ImageLocal'

import { ProductDetails } from './ProductList.styles'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'
import filterProductList from './filterProductList'

export default function ProductList({ filters }) {
  const { isMobile } = useThemeContext()
  const { products, skus, productsIdsAll, productsIdsByCategory } = useProductsContext()

  const productsListFiltered = filterProductList({ productsIdsAll, productsIdsByCategory, filters })

  return (
    <GridList cols={isMobile ? 2 : 4} cellHeight="auto">
      {productsListFiltered.map((productId) => (
        <GridListTile key={productId}>
          <Link to={`/${skus[products[productId].skuDefaultId].fields.slug}`}>
            <ImageLocal localFiles={products[productId].localFiles} alt={products[productId].name} />
            <ProductDetails $isMobile={isMobile}>
              <ProductName product={products[productId]} />
              <ProductPrice product={products[productId]} />
            </ProductDetails>
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
