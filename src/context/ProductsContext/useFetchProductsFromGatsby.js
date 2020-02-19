import { useStaticQuery, graphql } from 'gatsby'

import getProducts from './getProducts'

/** Normalize structure of data sourced from Gatsby's GraphQL store */
const useFetchProductsFromGatsby = () => {
  const { allStripeSku } = useStaticQuery(graphql`
    query skuList($maxWidth: Int = 800, $quality: Int = 92) {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        edges {
          node {
            id
            price
            fields {
              slug
            }
            attributes {
              category
              color
              size
            }
            localFiles {
              childImageSharp {
                fluid(maxWidth: $maxWidth, quality: $quality) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            product {
              active
              id
              name
              metadata {
                defaultColor
                defaultSize
              }
              localFiles {
                childImageSharp {
                  fluid(maxWidth: $maxWidth, quality: $quality) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
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
