import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import allStripeSkuQuery from 'graphql/sku/allStripeSku'
import useFetchProducts from './useFetchProducts'

const ProductsContext = React.createContext()

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsContextProvider = ({ children }) => {
  const { allStripeSku } = useStaticQuery(graphql`
    query allStripeSku($maxWidth: Int = 300, $quality: Int = 92) {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        group(field: product___id) {
          fieldValue
          edges {
            node {
              ...Sku
            }
          }
        }
      }
    }
  `)

  const value = useFetchProducts({ allStripeSku })
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductsContextProvider

function useProductsContext() {
  const context = React.useContext(ProductsContext)

  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsContextProvider')
  }

  return context
}

export { useProductsContext, ProductsContextProvider }
