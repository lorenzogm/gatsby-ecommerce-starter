import styled from 'styled-components'
import FormControl_ from '@material-ui/core/FormControl'
import NativeSelect_ from '@material-ui/core/NativeSelect'
import theme from 'theme'

// eslint-disable-next-line import/prefer-default-export
export const FormControl = styled(FormControl_)`
  border: 2px ${theme.palette.secondary.main} solid;
  border-radius: 5px;
  margin-bottom: ${theme.spacing(2)}px;
  width: 100%;
`
export const NativeSelect = styled(NativeSelect_)`
  font-weight: bold;
  padding-left: ${theme.spacing(1)}px;
`
