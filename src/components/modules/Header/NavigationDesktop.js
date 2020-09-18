import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import Link from 'components/foundations/Link/Link'

import { NavBar, NavBarItem } from './NavigationDesktop.styles'

export default function NavigationDesktop({ navigationItems }) {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <>
      <NavBar>
        {navigationItems.map((navBarItem) => (
          <NavBarItem key={navBarItem.slug}>
            <Link to={`/${navBarItem.slug}`}>
              <Typography component="h2" variant="button">
                {navBarItem.name}
              </Typography>
            </Link>
          </NavBarItem>
        ))}
      </NavBar>
      <NavBar>
        {languages.map((languageCode) => (
          <NavBarItem key={languageCode}>
            <Link to={originalPath} language={languageCode}>
              {languageCode === 'en' && t('English')}
              {languageCode === 'es' && t('Spanish')}
            </Link>
          </NavBarItem>
        ))}
      </NavBar>
    </>
  )
}

NavigationDesktop.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
