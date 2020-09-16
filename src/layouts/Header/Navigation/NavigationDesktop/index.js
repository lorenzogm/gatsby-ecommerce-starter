import Link from 'components/Link'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import * as S from './styles'

const NavigationDesktop = ({ navigationItems }) => {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <>
      <S.NavBar>
        {navigationItems.map((navBarItem) => (
          <S.NavBarItem key={navBarItem.slug}>
            <Link to={`/${navBarItem.slug}`}>
              <Typography component="h2" variant="button">
                {navBarItem.name}
              </Typography>
            </Link>
          </S.NavBarItem>
        ))}
      </S.NavBar>
      <S.NavBar>
        {languages.map((languageCode) => (
          <S.NavBarItem key={languageCode}>
            <Link to={originalPath} language={languageCode}>
              {languageCode === 'en' && t('English')}
              {languageCode === 'es' && t('Spanish')}
            </Link>
          </S.NavBarItem>
        ))}
      </S.NavBar>
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

export default NavigationDesktop
