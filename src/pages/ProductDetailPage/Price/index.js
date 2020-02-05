import React from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import getProductPrice from '../../../utils/products/getProductPrice'

const Price = ({ product }) => {
  const price = getProductPrice({ product })
  return <Box>{price}</Box>
}

Price.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string.isRequired,
  }).isRequired,
}

export default Price
