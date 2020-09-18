import styled from 'styled-components'
import Toolbar_ from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

import theme from 'theme'

export const Toolbar = styled(Toolbar_)`
  justify-content: space-between;
  overflow: hidden;
  padding-left: 0px;
  padding-right: 0px;
`
export const LogoWrapper = styled(Box)`
  margin-right: ${({ $isMobile }) => ($isMobile ? `${theme.spacing(0)}px` : `${theme.spacing(4)}px`)};
`
