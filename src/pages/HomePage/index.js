import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ProductList from '../../components/ProductList'

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProductList />
  </Layout>
)

export default HomePage
