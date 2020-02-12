import { graphql } from 'gatsby'

export const skuFragment = graphql`
  fragment Sku on StripeSku {
    id
    price
    fields {
      slug
    }
    attributes {
      color
      size
    }
    product {
      id
      name
      metadata {
        defaultColor
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
`

export default skuFragment
