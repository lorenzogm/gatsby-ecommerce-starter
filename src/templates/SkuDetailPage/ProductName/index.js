import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const ProductName = ({ product }) => (
  <Typography component="h1" variant="h4" color="secondary">
    {product.name}
  </Typography>
)

ProductName.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductName
