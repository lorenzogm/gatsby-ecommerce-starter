import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import ProductsProvider from 'components/ProductsProvider'
import CartProvider from 'components/CartProvider'
import Footer from 'components/Footer'

import './layout.css'
import * as S from './styles'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'theme'

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
        <ProductsProvider>
          <CartProvider>
            <S.Root>
              <Header siteTitle={data.site.siteMetadata.title} />
              <S.Container component="main">{children}</S.Container>
              <Footer />
            </S.Root>
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
