import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'

const Navigation = ({ variant }) => {
  const { t } = useTranslation()

  const navigationItems = [
    { slug: 'women', name: t('Women') },
    { slug: 'men', name: t('Men') },
    { slug: 'kids', name: t('Kids') },
    { slug: 'babies', name: t('Babies') },
  ]

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
