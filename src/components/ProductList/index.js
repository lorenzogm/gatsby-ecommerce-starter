import React, { useContext } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { ProductsContext } from 'components/ProductsProvider'
import Link from 'components/Link'
import ProductImage from 'components/ProductImage'

import * as S from './styles'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'
import { GridListTileBar } from '@material-ui/core'

const ProductList = () => {
  const { listProducts } = useContext(ProductsContext)
  const products = listProducts()

  return (
    <GridList cols={4} cellHeight="auto">
      {products.map(product => (
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
