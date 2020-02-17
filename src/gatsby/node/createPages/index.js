const createProductDetailPages = require('./createProductDetailPages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createProductDetailPages({ graphql, createPage })
}

module.exports = createPages
