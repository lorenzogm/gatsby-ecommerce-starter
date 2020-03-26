import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/Image'

import * as S from './styles'

const ImageLocal = ({ localFiles, alt }) => {
  if (!localFiles || !localFiles[0] || !localFiles[0].childImageSharp || !localFiles[0].childImageSharp.fluid) {
    // eslint-disable-next-line no-console
    console.error(`Undefined "localFiles" ${JSON.stringify(localFiles)}`)
    return null
  }

  return (
    <S.Background>
      <Image fluid={localFiles[0].childImageSharp.fluid} alt={alt} />
    </S.Background>
  )
}

ImageLocal.propTypes = {
  localFiles: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }),
  ).isRequired,
  alt: PropTypes.string.isRequired,
}

export default ImageLocal
