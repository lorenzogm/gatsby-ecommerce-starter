import Button from 'components/Button'
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
import { useTranslation } from 'react-i18next'

const NavigationMobile = ({ navigationItems }) => {
  const { t } = useTranslation()

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const onDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  const onDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  const onClickCategory = ({ slug }) => {
    setIsDrawerOpen(false)
    navigate(slug)
  }

  return (
    <>
      <Button variant="buttonless" startIcon={<MenuIcon fontSize="small" />} onClick={onDrawerOpen} />
      <Drawer anchor="left" open={isDrawerOpen} onClose={onDrawerClose}>
        <List>
          {navigationItems.map((navigationItem, index) => (
            <div key={navigationItem.slug}>
              {index > 0 && <Divider />}

              <ListItem button onClick={() => onClickCategory({ slug: navigationItem.slug })}>
                <ListItemText primary={t(navigationItem.name)} />
                <ListItemIcon>{navigationItem.icon}</ListItemIcon>
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

export default NavigationMobile
