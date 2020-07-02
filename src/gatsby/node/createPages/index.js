const createCategoryPages = require('./createCategoryPages')
const createSkuDetailPages = require('./createSkuDetailPages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createCategoryPages({ graphql, createPage })
  await createSkuDetailPages({ graphql, createPage })
}

module.exports = createPages
