import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function ProductName({ product }) {
  return (
    <Typography variant="caption" component="h3">
      {product.name}
    </Typography>
  )
}

ProductName.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
