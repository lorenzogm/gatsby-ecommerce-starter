const path = require('path')
const slug = require('slug')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Add slug for page generation.
  if (node.internal.type === 'StripeSku') {
    const value = createNodeField({
      node,
      name: 'slug',
      value: slug(node.attributes.name, slug.defaults.modes['rfc3986']),
    })
  }
}

const createProductDetailPages = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      allStripeSku {
        edges {
          node {
            fields {
              slug
            }
            product {
              id
              name
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    Promise.reject(result.errors)
  }

  // Create product pages
  const products = {}

  result.data.allStripeSku.edges.forEach(({ node }) => {
    products[node.product.id] = node.fields.slug
  })

  Object.entries(products).forEach(([id, slug]) => {
    createPage({
      path: slug,
      component: path.resolve('src/pages/ProductDetailPage/index.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createProductDetailPages({ graphql, createPage })
}
