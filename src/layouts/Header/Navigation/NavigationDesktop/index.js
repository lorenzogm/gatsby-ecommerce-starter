import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import Link from 'components/Link'
import * as S from './styles'

const NavigationDesktop = ({ navigationItems }) => {
  return (
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
