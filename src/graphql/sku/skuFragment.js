import { graphql } from 'gatsby'

export const skuFragment = graphql`
  fragment Sku on StripeSku {
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
`

export default skuFragment
