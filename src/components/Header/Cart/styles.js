import styled from 'styled-components'
import Popover_ from '@material-ui/core/Popover'

import theme from 'theme'

// eslint-disable-next-line import/prefer-default-export
export const Popover = styled(Popover_)`
  pointer-events: none;
  padding: ${theme.spacing(1)}px;
`
