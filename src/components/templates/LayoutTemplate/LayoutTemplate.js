import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles'

import { ThemeContextProvider } from 'context/ThemeContext'
import { ProductsContextProvider } from 'context/ProductsContext'
import { CartContextProvider } from 'context/CartContext'
import theme from 'theme'

import Header from 'components/modules/Header/Header'
import Footer from 'components/modules/Footer/Footer'
import { Root, Container } from './LayoutTemplate.styles'

import './layout.css'

export default function LayoutTemplate({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={theme}>
          <ThemeContextProvider>
            <ProductsContextProvider>
              <CartContextProvider>
                <Root>
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <Container component="main">{children}</Container>
                  <Footer />
                </Root>
              </CartContextProvider>
            </ProductsContextProvider>
          </ThemeContextProvider>
        </ThemeProvider>
      )}
    />
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
