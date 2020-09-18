import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export default function Image({ fluid, alt }) {
  return <Img fluid={fluid} alt={alt} />
}

Image.propTypes = {
  fluid: PropTypes.shape({}).isRequired,
  alt: PropTypes.string.isRequired,
}
