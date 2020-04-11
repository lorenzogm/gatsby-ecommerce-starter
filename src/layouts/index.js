import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles'

import { ThemeContextProvider } from 'context/ThemeContext'
import { ProductsContextProvider } from 'context/ProductsContext'
import { CartContextProvider } from 'context/CartContext'
import theme from 'theme'

import Header from './Header'
import Footer from './Footer'
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
    render={(data) => (
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <ProductsContextProvider>
            <CartContextProvider>
              <S.Root>
                <Header siteTitle={data.site.siteMetadata.title} />
                <S.Container component="main">{children}</S.Container>
                <Footer />
              </S.Root>
            </CartContextProvider>
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
