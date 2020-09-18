import React from 'react'
import PropTypes from 'prop-types'
import ButtonMUI from '@material-ui/core/Button'

import { Buttonless } from './Button.styles'

export default function Button({ children, variant, ...rest }) {
  if (variant === 'buttonless') {
    return <Buttonless {...rest}>{children}</Buttonless>
  }

  return <ButtonMUI {...rest}>{children}</ButtonMUI>
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['buttonless']),
}

Button.defaultProps = {
  children: undefined,
  variant: undefined,
}
