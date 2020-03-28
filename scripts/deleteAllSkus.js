/* eslint-disable no-await-in-loop */
const skuSkip = ['TSH-MYF-WHI-LAR', 'BOD-MYF-WHI-612']

const deleteAllSkus = async ({ stripe }) => {
  // delete all skus
  let isAnySkuLeft = true
  while (isAnySkuLeft) {
    const skuList = await stripe.skus.list({ limit: 10 })

    const skuListDelete = await Promise.all(
      skuList.data.filter((sku) => skuSkip.indexOf(sku.id) === -1).map((sku) => stripe.skus.del(sku.id)),
    )

    // eslint-disable-next-line no-console
    console.log(`${skuListDelete.length} skus deleted`)

    if (!skuList.has_more) {
      isAnySkuLeft = false
      break
    }

    await new Promise((r) => setTimeout(r, 1000))
  }
}

module.exports = deleteAllSkus
