import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { Footer as FooterStyled } from './Footer.styles'

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Typography variant="body2">{`Copyright © Dindim ${new Date().getFullYear()}`}</Typography>
      </Container>
    </FooterStyled>
  )
}
