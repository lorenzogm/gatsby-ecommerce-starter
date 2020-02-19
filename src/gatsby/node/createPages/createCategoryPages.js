const path = require('path')
const categories = require('../../../constants/categories')

const createCategoryPages = async ({ graphql, createPage }) => {
  const { errors, data } = await graphql(`
    {
      allStripeSku {
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

  categoriesIdsUnique.forEach(categoryId => {
    createPage({
      path: categories[categoryId].slug,
      component: path.resolve('src/templates/CategoryPage/index.js'),
      context: { categoryId },
    })
  })
}

module.exports = createCategoryPages
