import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/Image'

const ProductImage = ({ product }) => {
  if (
    !product.localFiles ||
    !product.localFiles[0] ||
    !product.localFiles[0].childImageSharp ||
    !product.localFiles[0].childImageSharp.fluid
  ) {
    // eslint-disable-next-line no-console
    console.error(`Undefined "localFiles" for product ${product.id}`)
    return null
  }

  return <Image fluid={product.localFiles[0].childImageSharp.fluid} alt={product.name} />
}

ProductImage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    localFiles: PropTypes.arrayOf(
      PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}).isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
}

export default ProductImage
