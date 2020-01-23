import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Cart from './Cart'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px auto;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Cart />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
