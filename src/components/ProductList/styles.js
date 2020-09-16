import styled from 'styled-components'
import Box_ from '@material-ui/core/Box'
import theme from 'theme'

export const ProductTile = styled(Box_)`
  position: relative;
`

export const ProductDetails = styled(Box_)`
  padding: ${theme.spacing(1)}px ${theme.spacing(1)}px;
  justify-content: space-between;
  display: ${({ $isMobile }) => ($isMobile ? 'block' : 'flex')};
`
