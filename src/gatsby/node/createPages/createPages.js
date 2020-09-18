const createCategoryPages = require('./createCategoryPages')
const createSkuDetailPages = require('./createSkuDetailPages')

module.exports = async function createTemplates({ graphql, actions }) {
  const { createPage } = actions

  await createCategoryPages({ graphql, createPage })
  await createSkuDetailPages({ graphql, createPage })
}
