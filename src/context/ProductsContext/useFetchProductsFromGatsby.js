import { useStaticQuery, graphql } from 'gatsby'

// import allStripeSkuQuery from 'graphql/sku/allStripeSku'
import getProducts from './getProducts'

/** Normalize structure of data sourced from Gatsby's GraphQL store */
const useFetchProductsFromGatsby = () => {
  const { allStripeSku } = useStaticQuery(graphql`
    query allStripeSku($maxWidth: Int = 800, $quality: Int = 92) {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        edges {
          node {
            ...Sku
          }
        }
      }
    }
  `)

  return {
    loading: false,
    data: getProducts(allStripeSku.edges.map(({ node }) => node)),
  }
}

export default useFetchProductsFromGatsby
