import styled from 'styled-components'
import Box_ from '@material-ui/core/Box'
import GridList_ from '@material-ui/core/GridList'
import theme from 'theme'

export const ProductTile = styled(Box_)`
  position: relative;
`

export const ProductDetails = styled(Box_)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  justify-content: space-between;
  display: flex;
`
