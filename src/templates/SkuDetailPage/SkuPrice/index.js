import React from 'react'
import PropTypes from 'prop-types'

import priceFormat from 'utils/priceFormat'

import * as S from './styles'

const SkuPrice = ({ skuSelected }) => {
  return (
    <S.Box>
      <S.Price color="secondary" component="span" variant="h6">
        {priceFormat(skuSelected.price)}
      </S.Price>
      <S.VAT component="span" variant="caption">
        VAT Included
      </S.VAT>
    </S.Box>
  )
}

SkuPrice.propTypes = {
  skuSelected: PropTypes.shape({ price: PropTypes.number.isRequired }).isRequired,
}

export default SkuPrice
