import React from 'react'
import PropTypes from 'prop-types'

import getProductPrice from 'utils/products/getProductPrice'

import * as S from './styles'

const ProductPrice = ({ product }) => {
  const price = getProductPrice({ product })
  return <S.Typography color="red">{price}</S.Typography>
}

ProductPrice.propTypes = {
  product: PropTypes.shape({}).isRequired,
}

export default ProductPrice
