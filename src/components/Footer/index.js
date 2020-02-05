import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import * as S from './styles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dindim{' '}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function StickyFooter() {
  return (
    <S.Footer>
      <Container>
        <Typography variant="body1">My sticky footer can be found here.</Typography>
        <Copyright />
      </Container>
    </S.Footer>
  )
}
