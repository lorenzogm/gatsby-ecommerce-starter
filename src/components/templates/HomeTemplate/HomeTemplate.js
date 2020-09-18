import React from 'react'

import SEO from 'components/elements/SEO/SEO'
import ProductList from 'components/modules/ProductList/ProductList'

export default function HomePage() {
  return (
    <>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <ProductList />
    </>
  )
}
