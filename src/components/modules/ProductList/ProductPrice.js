import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import priceFormat from 'utils/priceFormat'

export default function ProductPrice({ product }) {
  return (
    <Typography variant="body2" color="secondary">
      {priceFormat(product.priceDefault)}
    </Typography>
  )
}

ProductPrice.propTypes = {
  product: PropTypes.shape({ priceDefault: PropTypes.number.isRequired }).isRequired,
}
