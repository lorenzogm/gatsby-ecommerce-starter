import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

export default function ProductName({ productSelected }) {
  return (
    <Typography component="h1" variant="h4" color="secondary">
      {productSelected.name}
    </Typography>
  )
}

ProductName.propTypes = {
  productSelected: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
