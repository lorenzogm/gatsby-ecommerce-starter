import React from 'react'

import SEO from 'components/SEO'
import ProductList from 'components/ProductList'

const CategoryPage = () => (
  <>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <ProductList />
  </>
)

export default CategoryPage
