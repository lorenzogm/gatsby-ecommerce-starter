import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({ fluid, alt }) => <Img fluid={fluid} alt={alt} />

Image.propTypes = {
  fluid: PropTypes.shape({}).isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
