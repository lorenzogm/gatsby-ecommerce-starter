import styled from 'styled-components'
import Box_ from '@material-ui/core/Box'

import theme from 'theme'

export const Row = styled(Box_)`
  display: flex;
`

export const Column = styled(Box_)`
  width: ${({ $isMobile }) => ($isMobile ? '25%' : '10%')};
  margin-right: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
  ${({ selected }) => selected && `border-bottom: 2px solid ${theme.palette.secondary.main}`}
`

export const ImageWrapper = styled(Box_)`
  border: 1px solid green;
`
