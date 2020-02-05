import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Box from '@material-ui/core/Box'

const Image = ({ product }) => {
  return <Box>{product.localFiles && <Img fluid={product.localFiles[0].childImageSharp.fluid} />}</Box>
}

Image.propTypes = {
  product: PropTypes.shape({
    localFiles: PropTypes.arrayOf([
      PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ]).isRequired,
  }).isRequired,
}

export default Image
