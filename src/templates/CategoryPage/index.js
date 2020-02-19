import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/SEO'
import ProductList from 'components/ProductList'
import categories from 'constants/categories'

const CategoryPage = ({ pageContext: { categoryId } }) => {
  const { categoryIds } = categories[categoryId]

  return (
    <>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <ProductList filters={{ categoryIds }} />
    </>
  )
}

CategoryPage.propTypes = {
  pageContext: PropTypes.shape({
    categoryId: PropTypes.string.isRequired,
  }).isRequired,
}

export default CategoryPage
