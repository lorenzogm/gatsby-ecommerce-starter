import React from 'react'
import PropTypes from 'prop-types'

import useFetchProducts from './useFetchProducts'

const ProductsContext = React.createContext()

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsContextProvider = ({ children }) => {
  const { data } = useFetchProducts()

  if (!data) {
    return null
  }

  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useProductsContext() {
  const context = React.useContext(ProductsContext)

  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsContextProvider')
  }

  return context
}

export { useProductsContext, ProductsContextProvider }
