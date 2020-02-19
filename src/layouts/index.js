import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles'

import Header from 'components/Header'
import { ThemeContextProvider } from 'context/ThemeContext'
import { ProductsContextProvider } from 'context/ProductsContext'
import CartProvider from 'components/CartProvider'
import Footer from 'components/Footer'
import theme from 'theme'

import * as S from './styles'

import './layout.css'

const Layout = ({ children }) => (
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
    render={data => (
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <ProductsContextProvider>
            <CartProvider>
              <S.Root>
                <Header siteTitle={data.site.siteMetadata.title} />
                <S.Container component="main">{children}</S.Container>
                <Footer />
              </S.Root>
            </CartProvider>
          </ProductsContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
