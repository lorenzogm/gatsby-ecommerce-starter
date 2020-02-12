import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'

import { useProductsContext } from 'context/ProductsContext'
import withLayout from 'components/Layout/withLayout'
import ProductImage from 'components/ProductImage'

import * as S from './styles'

import ProductColor from './ProductColor'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'

import AddToCartButton from './AddToCartButton'

const ProductPage = ({ pageContext: { id: productId } }) => {
  const { products } = useProductsContext()

  const product = products[productId]

  return (
    <S.Main>
      <S.ColumnLeft>
        <ProductImage product={product} />
      </S.ColumnLeft>
      <S.ColumnRight>
        <ProductName product={product} />
        <Divider />
        <ProductPrice product={product} />
        <ProductColor product={product} />
        {/* <Size product={product} /> */}
        <AddToCartButton product={product} />
        {/* <DeliveryConditions /> */}
      </S.ColumnRight>
    </S.Main>
  )
}

ProductPage.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default withLayout(ProductPage)
