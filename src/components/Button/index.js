import React from 'react'
import PropTypes from 'prop-types'
import ButtonMUI from '@material-ui/core/Button'

import * as S from './styles'

const Button = ({ children, variant, ...rest }) =>
  variant === 'buttonless' ? (
    <S.Buttonless {...rest}>{children}</S.Buttonless>
  ) : (
    <ButtonMUI {...rest}>{children}</ButtonMUI>
  )

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['buttonless']),
}

Button.defaultProps = {
  children: undefined,
  variant: undefined,
}

export default Button
