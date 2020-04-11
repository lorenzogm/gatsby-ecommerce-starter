import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import * as S from './styles'

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dindim{' '}
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
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
