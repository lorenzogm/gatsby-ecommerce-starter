import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import getProductPrice from 'utils/products/getProductPrice'

const ProductPrice = ({ product }) => {
  const price = getProductPrice({ product })
  return (
    <Typography variant="caption" color="primary">
      {price}
    </Typography>
  )
}

ProductPrice.propTypes = {
  product: PropTypes.shape({}).isRequired,
}

export default ProductPrice
