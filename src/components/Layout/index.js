import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import ProductsProvider from '../ProductsProvider'
import CartProvider from '../CartProvider'
import Footer from '../Footer'

import './layout.css'
import * as S from './styles'

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
      <ProductsProvider>
        <CartProvider>
          <S.Root>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container component="main">{children}</Container>
            <Footer />
          </S.Root>
        </CartProvider>
      </ProductsProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
