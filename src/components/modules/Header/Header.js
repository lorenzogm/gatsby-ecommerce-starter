import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { useTranslation } from 'react-i18next'

import { useThemeContext } from 'context/ThemeContext'
import Logo from 'components/elements/Logo/Logo'

import Cart from './Cart'
import { Toolbar, LogoWrapper } from './Header.styles'
import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'

export default function Header() {
  const { t } = useTranslation()
  const { isMobile } = useThemeContext()

  const navigationItems = [
    { slug: 'women', name: t('Women') },
    { slug: 'men', name: t('Men') },
    { slug: 'kids', name: t('Kids') },
    { slug: 'babies', name: t('Babies') },
  ]

  return (
    <AppBar position="sticky">
      <header>
        <Container>
          <Toolbar>
            {isMobile && <NavigationMobile navigationItems={navigationItems} />}
            <LogoWrapper $isMobile={isMobile}>
              <Logo />
            </LogoWrapper>
            {!isMobile && <NavigationDesktop navigationItems={navigationItems} />}
            <Cart />
          </Toolbar>
        </Container>
      </header>
    </AppBar>
  )
}
