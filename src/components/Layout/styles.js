import styled from 'styled-components'
import Container_ from '@material-ui/core/Container'
import theme from 'theme'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Container = styled(Container_)`
  margin-top: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(2)}px;
`
