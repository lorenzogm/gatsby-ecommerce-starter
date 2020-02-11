import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ProductsContext } from 'components/ProductsProvider'
import withLayout from 'components/Layout/withLayout'
import ProductImage from 'components/ProductImage'
import ProductPrice from './ProductPrice'
import ProductName from './ProductName'

import AddToCartButton from './AddToCartButton'
import * as S from './styles'

const ProductPage = ({ pageContext: { id: productId } }) => {
  const { products } = useContext(ProductsContext)

  const product = products[productId]

  console.log(product)

  return (
    <S.Main>
      <S.ColumnLeft>
        <ProductImage product={product} />
      </S.ColumnLeft>
      <S.ColumnRight>
        <ProductName product={product} />
        <ProductPrice product={product} />
        {/* <Color product={product} /> */}
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
