import Link from 'components/Link'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

const NavigationDesktop = ({ navigationItems }) => {
  const { t } = useTranslation()

  return (
    <S.NavBar>
      {navigationItems.map((navBarItem) => (
        <S.NavBarItem key={navBarItem.slug}>
          <Link to={`/${navBarItem.slug}`}>
            <Typography component="h2" variant="button">
              {t(navBarItem.name)}
            </Typography>
          </Link>
        </S.NavBarItem>
      ))}
    </S.NavBar>
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
