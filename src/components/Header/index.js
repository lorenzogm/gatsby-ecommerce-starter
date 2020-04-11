import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

import { useThemeContext } from 'context/ThemeContext'

import Cart from './Cart'
import Logo from './Logo'
import * as S from './styles'
import Navigation from './Navigation'

const Header = () => {
  const { isMobile } = useThemeContext()

  return (
    <AppBar position="sticky">
      <header>
        <Container>
          <S.Toolbar>
            {isMobile && <Navigation variant="MOBILE" />}
            <S.LogoWrapper isMobile={isMobile}>
              <Logo />
            </S.LogoWrapper>
            {!isMobile && <Navigation variant="DESKTOP" />}
            <Cart />
          </S.Toolbar>
        </Container>
      </header>
    </AppBar>
  )
}

export default Header
