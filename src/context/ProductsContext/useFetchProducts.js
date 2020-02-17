import useFetchProductsFromGatsby from './useFetchProductsFromGatsby'
import useFetchProductsFromStripe from './useFetchProductsFromStripe'

const useFetchProducts = () => {
  const { loading: loadingGatsby, data: dataGatsby } = useFetchProductsFromGatsby()
  const { loading: loadingStripe, data: dataStripe } = useFetchProductsFromStripe()

  const loading = loadingGatsby || loadingStripe

  if (loading) {
    return { loading }
  }

  const products = Object.values(dataGatsby.products).reduce(
    (acc, product) => ({
      ...acc,
      [product.id]: { ...product, ...dataStripe.products[product.id] },
    }),
    {},
  )

  const skus = Object.values(dataGatsby.skus).reduce(
    (acc, sku) => ({
      ...acc,
      [sku.id]: { ...sku, ...dataStripe.skus[sku.id], product: undefined, productId: sku.product.id },
    }),
    {},
  )

  return {
    loading,
    data: {
      products,
      productsByCategory: dataStripe.productsByCategory,
      listAllProducts: dataStripe.listAllProducts,
      skus,
    },
  }
}

export default useFetchProducts
