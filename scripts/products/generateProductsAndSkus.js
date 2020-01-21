const generateProductsAndSkus = ({ defaultProduct, defaultSku, skus: { colorId, colorName, skus: skusByColor } }) => {
  const skusGenerated = skusByColor.map(({ sizeId, sizeName, price }) => ({
    ...defaultSku,
    id: `${defaultProduct.id}-${colorId}-${sizeId}`,
    attributes: { ...defaultSku.attributes, color: colorName, size: sizeName },
    price,
  }))

  const product = {
    ...defaultProduct,
    skus: skusGenerated.map(sku => ({
      ...defaultSku,
      ...sku,
      attributes: { ...defaultSku.attributes, name: defaultProduct.name, ...sku.attributes },
    })),
  }

  return product
}

module.exports = generateProductsAndSkus
