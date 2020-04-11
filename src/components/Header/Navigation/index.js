import React from 'react'
import PropTypes from 'prop-types'

import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

const navigationItems = [
  { slug: 'women', name: 'Women' },
  { slug: 'men', name: 'Men' },
  { slug: 'kids', name: 'Kids' },
  { slug: 'babies', name: 'Babies' },
]

const Navigation = ({ variant }) => {
  return variant === 'MOBILE' ? (
    <NavigationMobile navigationItems={navigationItems} />
  ) : (
    <NavigationDesktop navigationItems={navigationItems} />
  )
}

Navigation.propTypes = {
  variant: PropTypes.oneOf(['MOBILE', 'DESKTOP']).isRequired,
}

export default Navigation
