import React from 'react'

import SEO from 'components/SEO'
import ProductList from 'components/ProductList'

const HomePage = () => (
  <>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <ProductList />
  </>
)

export default HomePage
