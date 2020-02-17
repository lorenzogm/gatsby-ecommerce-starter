import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { useProductsContext } from 'context/ProductsContext'
import Link from 'components/Link'
import ImageLocal from 'components/ImageLocal'

import * as S from './styles'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'

const ProductList = () => {
  const { products, skus, listAllProducts } = useProductsContext()

  return (
    <GridList cols={4} cellHeight="auto">
      {listAllProducts.map(productId => (
        <GridListTile key={productId}>
          <Link to={`/${skus[products[productId].skuDefaultId].fields.slug}`}>
            <ImageLocal localFiles={products[productId].localFiles} alt={products[productId].name} />
            <S.ProductDetails>
              <ProductName product={products[productId]} />
              <ProductPrice product={products[productId]} />
            </S.ProductDetails>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ProductList
