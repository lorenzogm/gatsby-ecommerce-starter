const createSkuDetailPages = require('./createSkuDetailPages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createSkuDetailPages({ graphql, createPage })
}

module.exports = createPages
