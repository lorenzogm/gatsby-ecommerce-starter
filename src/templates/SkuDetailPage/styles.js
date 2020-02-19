import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import theme from 'theme'

export const Main = styled(Box)`
  display: flex;

  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`
export const ProductImage = styled(Box)`
  flex: 1;
`
export const ProductDetails = styled(Box)`
  flex: 1;
`
