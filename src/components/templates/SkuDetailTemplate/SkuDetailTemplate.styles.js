import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import theme from 'theme'

export const PageContent = styled(Box)`
  display: flex;

  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`
export const ProductImage = styled(Box)`
  flex: 1;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? `${theme.spacing(2)}px` : `${theme.spacing(0)}px`)};
  margin-right: ${({ $isMobile }) => ($isMobile ? `${theme.spacing(0)}px` : `${theme.spacing(3)}px`)};
`
export const ProductDetails = styled(Box)`
  flex: 1;
`
