import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

import Cart from './Cart'
import Logo from './Logo'
import * as S from './styles'
import NavBar from './NavBar'

const Header = () => (
  <AppBar position="sticky">
    <header>
      <Container>
        <S.Toolbar>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <NavBar />
          <Cart />
        </S.Toolbar>
      </Container>
    </header>
  </AppBar>
)

export default Header
