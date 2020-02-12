import React from 'react'
import PropTypes from 'prop-types'

import getProductPrice from 'utils/products/getProductPrice'

import * as S from './styles'

const ProductPrice = ({ product }) => {
  const price = getProductPrice({ product })
  return (
    <S.Box>
      <S.Price color="secondary" component="span" variant="h6">
        {price}
      </S.Price>
      <S.VAT component="span" variant="caption">
        VAT Included
      </S.VAT>
    </S.Box>
  )
}

ProductPrice.propTypes = {
  product: PropTypes.shape({}).isRequired,
}

export default ProductPrice
