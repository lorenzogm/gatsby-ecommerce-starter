import React from 'react'
import PropTypes from 'prop-types'

import { Link as LinkStyled } from './Link.styles'

export default function Link({ children, to, language }) {
  return (
    <LinkStyled to={to} language={language}>
      {children}
    </LinkStyled>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
}

Link.defaultProps = {
  language: undefined,
}
