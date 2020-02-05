import React from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'

const Name = ({ product }) => {
  return <Box component="h1">{product.name}</Box>
}

Name.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Name
