import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import theme from '../../../theme'

export const NavBar = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${theme.spacing(2)}px;
`
export const NavBarItem = styled(Box)`
  margin-right: ${theme.spacing(2)}px;
`
