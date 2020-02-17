import styled from 'styled-components'
import Box_ from '@material-ui/core/Box'
import Typography_ from '@material-ui/core/Typography'
import theme from 'theme'

export const Box = styled(Box_)`
  align-items: center;
  display: flex;
  margin: ${theme.spacing(2)}px ${theme.spacing(0)}px;
`
export const Price = styled(Typography_)``
export const VAT = styled(Typography_)`
  color: grey;
  margin-left: ${theme.spacing(2)}px;
`
