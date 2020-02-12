import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { useProductsContext } from 'context/ProductsContext'
import Link from 'components/Link'
import ProductImage from 'components/ProductImage'

import * as S from './styles'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'

const ProductList = () => {
  const { listProducts } = useProductsContext()

  return (
    <GridList cols={4} cellHeight="auto">
      {listProducts().map(product => (
        <GridListTile key={product.id}>
          <Link to={`/${product.slug}`}>
            <ProductImage product={product} />
            <S.ProductDetails>
              <ProductName product={product} />
              <ProductPrice product={product} />
            </S.ProductDetails>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ProductList
