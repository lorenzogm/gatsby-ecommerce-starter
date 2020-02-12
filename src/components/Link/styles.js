import styled from 'styled-components'
import { Link as Link_ } from 'gatsby'

// eslint-disable-next-line import/prefer-default-export
export const Link = styled(Link_)`
  color: grey;
  text-decoration: none;
  &:hover,
  &:active,
  &:visited {
    color: grey;
  }
`
