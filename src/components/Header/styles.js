import styled from 'styled-components'
import AppBar_ from '@material-ui/core/AppBar'
import Toolbar_ from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

import theme from 'theme'

export const AppBar = styled(AppBar_)``
export const Toolbar = styled(Toolbar_)`
  justify-content: space-between;
`
export const LogoWrapper = styled(Box)`
  margin-right: ${theme.spacing(4)}px;
`
