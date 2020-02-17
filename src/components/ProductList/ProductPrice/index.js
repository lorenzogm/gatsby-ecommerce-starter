import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import priceFormat from 'utils/priceFormat'

const ProductPrice = ({ product }) => {
  return (
    <Typography variant="caption" color="primary">
      {priceFormat(product.priceDefault)}
    </Typography>
  )
}

ProductPrice.propTypes = {
  product: PropTypes.shape({ priceDefault: PropTypes.number.isRequired }).isRequired,
}

export default ProductPrice
