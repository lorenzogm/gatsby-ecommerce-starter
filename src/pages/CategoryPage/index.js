import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ProductList from 'components/ProductList'

const CategoryPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <ProductList />
  </Layout>
)

export default CategoryPage
