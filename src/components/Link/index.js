import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Link = ({ children, to }) => {
  return <S.Link to={to}>{children}</S.Link>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Link
