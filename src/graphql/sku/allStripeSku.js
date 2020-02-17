import { graphql } from 'gatsby'

const allStripeSku = graphql`
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
`

export default allStripeSku
