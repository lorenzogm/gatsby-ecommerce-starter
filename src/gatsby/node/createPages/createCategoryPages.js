const path = require('path')
const categories = require('../../../constants/categories')

module.exports = async function createCategoryPages({ graphql, createPage }) {
  const { errors, data } = await graphql(`
    query categoryList {
      allStripeSku(filter: { product: { active: { eq: true } } }) {
        distinct(field: attributes___category)
      }
    }
  `)

  if (errors) {
    Promise.reject(errors)
  }

  const categoriesIds = data.allStripeSku.distinct.reduce(
    (acc, categoryId) => (categoryId === categories.UNISEX.id ? [...acc, 'WOMEN', 'MEN'] : [...acc, categoryId]),
    [],
  )

  const categoriesIdsUnique = [...new Set(categoriesIds)]

  categoriesIdsUnique.forEach((categoryId) => {
    createPage({
      path: categories[categoryId].slug,
      component: path.resolve('src/components/templates/CategoryTemplate/CategoryTemplate.js'),
      context: { categoryId },
    })
  })
}
