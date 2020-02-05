const skuSkip = ['TSH-MYF-WHI-LAR', 'BOD-MYF-WHI-612']

const deleteAllSkus = async ({ stripe }) => {
  // delete all skus
  const skuList = await stripe.skus.list({ limit: 100 })
  const skuListDelete = await Promise.all(
    skuList.data.filter(sku => skuSkip.indexOf(sku.id) === -1).map(sku => stripe.skus.del(sku.id)),
  )
  console.log(`${skuListDelete.length} skus deleted`)
}

module.exports = deleteAllSkus
