import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const ProductName = ({ productSelected }) => (
  <Typography component="h1" variant="h4" color="secondary">
    {productSelected.name}
  </Typography>
)

ProductName.propTypes = {
  productSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductName
