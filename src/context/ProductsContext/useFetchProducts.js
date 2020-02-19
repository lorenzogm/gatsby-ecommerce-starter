import useFetchProductsFromGatsby from './useFetchProductsFromGatsby'
import useFetchProductsFromStripe from './useFetchProductsFromStripe'
import mergeProducts from './mergeProducts'

const useFetchProducts = () => {
  const { data: dataGatsby } = useFetchProductsFromGatsby()
  const { data: dataStripe } = useFetchProductsFromStripe()

  const { products, productsIdsAll, productsIdsByCategory, skus } = mergeProducts({ dataGatsby, dataStripe })

  return {
    data: {
      products,
      productsIdsAll,
      productsIdsByCategory,
      skus,
    },
  }
}

export default useFetchProducts
