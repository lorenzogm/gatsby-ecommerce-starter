import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/elements/SEO/SEO'
import ProductList from 'components/modules/ProductList/ProductList'
import categories from 'constants/categories'

export default function CategoryPage({ pageContext: { categoryId } }) {
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
