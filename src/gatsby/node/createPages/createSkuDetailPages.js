const path = require('path')

module.exports = async function createSkuDetailPages({ graphql, createPage }) {
  const { errors, data } = await graphql(`
    query skuList {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            product {
              active
            }
          }
        }
      }
    }
  `)

  if (errors) {
    Promise.reject(errors)
  }

  data.allStripeSku.edges.forEach(({ node: sku }) => {
    createPage({
      path: sku.fields.slug,
      component: path.resolve('src/components/templates/SkuDetailTemplate/SkuDetailTemplate.js'),
      context: { skuId: sku.id },
    })
  })
}
