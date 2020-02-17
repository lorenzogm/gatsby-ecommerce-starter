const getProducts = skusList => {
  return skusList.reduce(
    (acc, sku) => {
      if (!sku.product.active) {
        return acc
      }

      if (!acc.products[sku.product.id]) {
        acc.products[sku.product.id] = { ...sku.product, skuDefault: null, skuIds: {}, skusByColor: {}, skusBySize: {} }
      }

      // priceDefault
      const priceDefault =
        sku.price < acc.products[sku.product.id].priceDefault
          ? sku.price
          : acc.products[sku.product.id].priceDefault || sku.price

      // skuDefaultId
      let skuDefaultId = acc.products[sku.product.id].skuDefaultId || null
      if (
        sku.attributes.color === sku.product.metadata.defaultColor &&
        sku.attributes.size === sku.product.metadata.defaultSize
      ) {
        skuDefaultId = sku.id
      }

      // skuIds
      if (!acc.products[sku.product.id].skuIds[sku.attributes.color]) {
        acc.products[sku.product.id].skuIds[sku.attributes.color] = {}
      }

      const skuIds = {
        ...acc.products[sku.product.id].skuIds,
        [sku.attributes.color]: {
          ...acc.products[sku.product.id].skuIds[sku.attributes.color],
          [sku.attributes.size]: sku.id,
        },
      }

      // // skusByColor
      // if (!acc.products[sku.product.id].skusByColor[sku.attributes.color]) {
      //   acc.products[sku.product.id].skusByColor[sku.attributes.color] = []
      // }
      // const skusByColor = {
      //   ...(acc.products[sku.product.id].skusByColor ? acc.products[sku.product.id].skusByColor : {}),
      //   [sku.attributes.color]: [...acc.products[sku.product.id].skusByColor[sku.attributes.color], sku],
      // }

      // // skusBySize
      // if (!acc.products[sku.product.id].skusBySize[sku.attributes.size]) {
      //   acc.products[sku.product.id].skusBySize[sku.attributes.size] = []
      // }
      // const skusBySize = {
      //   ...(acc.products[sku.product.id].skusBySize ? acc.products[sku.product.id].skusBySize : {}),
      //   [sku.attributes.size]: [...acc.products[sku.product.id].skusBySize[sku.attributes.size], sku],
      // }

      // productsByCategory
      if (!acc.productsByCategory[sku.attributes.category]) {
        acc.productsByCategory[sku.attributes.category] = []
      }
      const productsByCategory = {
        ...acc.productsByCategory,
        [sku.attributes.category]: [
          ...acc.productsByCategory[sku.attributes.category],
          ...(acc.productsByCategory[sku.attributes.category].indexOf(sku.product.id) === -1 ? [sku.product.id] : []),
        ],
      }

      // listAllProducts
      const listAllProducts = [
        ...acc.listAllProducts,
        ...(acc.listAllProducts.indexOf(sku.product.id) === -1 ? [sku.product.id] : []),
      ]

      return {
        products: {
          ...acc.products,
          [sku.product.id]: {
            ...sku.product,
            priceDefault,
            skuDefaultId,
            skuIds,
            // skusByColor,
            // skusBySize,
          },
        },
        skus: {
          ...acc.skus,
          [sku.id]: sku,
        },
        listAllProducts,
        productsByCategory,
      }
    },
    { products: {}, skus: {}, listAllProducts: [], productsByCategory: {} },
  )
}

export default getProducts
