import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import { useMediaQuery } from '@material-ui/core'

const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const data = {
    isMobile: isDownSm,
    isTable: isUpSm && isDownMd,
    isDesktop: isUpMd,
  }

  const loading = Object.values(data).find((value) => value) === undefined
  if (loading) {
    return null
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }

  return context
}

export { useThemeContext, ThemeContextProvider }
