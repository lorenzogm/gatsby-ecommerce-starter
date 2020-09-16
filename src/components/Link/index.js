import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Link = ({ children, to, language }) => (
  <S.Link to={to} language={language}>
    {children}
  </S.Link>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
}

Link.defaultProps = {
  language: undefined,
}

export default Link
