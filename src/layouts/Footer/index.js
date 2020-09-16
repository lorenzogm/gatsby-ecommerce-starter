import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import * as S from './styles'

function Copyright() {
  return <Typography variant="body2">{`Copyright © Dindim ${new Date().getFullYear()}`}</Typography>
}

export default function StickyFooter() {
  return (
    <S.Footer>
      <Container>
        <Copyright />
      </Container>
    </S.Footer>
  )
}
