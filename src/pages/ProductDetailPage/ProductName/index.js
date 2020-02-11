import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const ProductName = ({ product }) => {
  return (
    <Typography variant="caption" component="h3" color="textPrimary">
      {product.name}
    </Typography>
  )
}

ProductName.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductName
