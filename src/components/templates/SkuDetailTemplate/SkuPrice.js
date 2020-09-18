import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import priceFormat from 'utils/priceFormat'

import { Box, Price, VAT } from './SkuPrice.styles'

export default function SkuPrice({ skuSelected }) {
  const { t } = useTranslation()
  return (
    <Box>
      <Price color="secondary" component="span" variant="h6">
        {priceFormat(skuSelected.price)}
      </Price>
      <VAT component="span" variant="caption">
        {t('VAT Included')}
      </VAT>
    </Box>
  )
}

SkuPrice.propTypes = {
  skuSelected: PropTypes.shape({ price: PropTypes.number.isRequired }).isRequired,
}
