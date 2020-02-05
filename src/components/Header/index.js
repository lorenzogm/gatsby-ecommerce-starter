import React from 'react'
import Logo from './Logo'
import Cart from './Cart'
import * as S from './styles'
import Container from '@material-ui/core/Container'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <S.AppBar position="static">
        <Container>
          <S.Toolbar>
            <Logo />
            <NavBar />
            <Cart />
          </S.Toolbar>
        </Container>
      </S.AppBar>
    </header>
  )
}

export default Header
