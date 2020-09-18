import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'

import Button from 'components/foundations/Button/Button'
import Logo from 'components/elements/Logo/Logo'

import { LogoWrapper } from './NavigationMobile.styles'

export default function NavigationMobile({ navigationItems }) {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const onDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  const onDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  const onClickCategory = ({ slug }) => {
    setIsDrawerOpen(false)
    navigate(`/${slug}`)
  }

  return (
    <>
      <Button variant="buttonless" startIcon={<MenuIcon fontSize="small" />} onClick={onDrawerOpen} />
      <Drawer anchor="top" open={isDrawerOpen} onClose={onDrawerClose}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <List>
          {navigationItems.map((navigationItem, index) => (
            <div key={navigationItem.slug}>
              {index > 0 && <Divider />}

              <ListItem button onClick={() => onClickCategory({ slug: navigationItem.slug })}>
                <ListItemText primary={navigationItem.name} />
                <ListItemIcon>{navigationItem.icon}</ListItemIcon>
              </ListItem>
            </div>
          ))}
        </List>

        <Divider />

        <List>
          {languages.map((languageCode) => (
            <div key={languageCode}>
              <ListItem button onClick={() => changeLanguage(languageCode)}>
                {languageCode === 'en' && <ListItemText primary={t('English')} />}
                {languageCode === 'es' && <ListItemText primary={t('Spanish')} />}
              </ListItem>
            </div>
          ))}
        </List>
      </Drawer>
    </>
  )
}

NavigationMobile.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
