import styled from 'styled-components'

import Button_ from '@material-ui/core/Button'
import theme from 'theme'

// eslint-disable-next-line import/prefer-default-export
export const Buttonless = styled(Button_)`
  min-width: 0px;
  text-transform: none;
  padding-left: ${theme.spacing(0)}px;
  padding-right: ${theme.spacing(0)}px;
  &:hover {
    background-color: transparent;
  }
`
