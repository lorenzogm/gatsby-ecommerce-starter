const filterProductList = ({ productsIdsAll, productsIdsByCategory, filters }) => {
  if (Object.keys(filters).length === 0) {
    return productsIdsAll
  }

  let productsListFiltered

  if (filters.categoryIds) {
    productsListFiltered = filters.categoryIds.reduce(
      (acc, categoryId) => (productsIdsByCategory[categoryId] ? [...acc, ...productsIdsByCategory[categoryId]] : acc),
      [],
    )
  }

  return productsListFiltered
}

export default filterProductList
