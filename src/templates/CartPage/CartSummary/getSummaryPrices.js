import priceFormat from 'utils/priceFormat'

const getSummaryPrices = ({ skus, cartSkuList }) => {
  const subtotal = cartSkuList.reduce((acc, item) => acc + item.quantity * skus[item.skuId].price, 0)
  const delivery = subtotal < 10000 ? 990 : 0
  const total = subtotal + delivery

  return { subtotal: priceFormat(subtotal), delivery: priceFormat(delivery), total: priceFormat(total) }
}

export default getSummaryPrices
