import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ProductsContext } from '../../components/ProductsProvider'
import withLayout from '../../components/Layout/withLayout'
import Image from './Image'
import Name from './Name'
import AddToCartButton from './AddToCartButton'
import * as S from './styles'
import Price from './Price'

const ProductPage = ({ pageContext: { id: productId } }) => {
  const { products } = useContext(ProductsContext)

  const product = products[productId]

  console.log(product)

  return (
    <S.Main>
      <S.ColumnLeft>
        <Image product={product} />
      </S.ColumnLeft>
      <S.ColumnRight>
        <Name product={product} />
        <Price product={product} />
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
