import React from 'react'
import Container from '@material-ui/core/Container'

import Cart from './Cart'
import Logo from './Logo'
import * as S from './styles'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <S.AppBar position="static">
        <Container>
          <S.Toolbar>
            <S.LogoWrapper>
              <Logo />
            </S.LogoWrapper>
            <NavBar />
            <Cart />
          </S.Toolbar>
        </Container>
      </S.AppBar>
    </header>
  )
}

export default Header
