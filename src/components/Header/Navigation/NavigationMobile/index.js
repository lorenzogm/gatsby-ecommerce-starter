import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'

import Button from 'components/Button'

const NavigationMobile = ({ navigationItems }) => {
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
                <ListItemText primary={navigationItem.name} />
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
