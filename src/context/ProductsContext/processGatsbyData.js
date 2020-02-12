/** Normalize structure of data sourced from Gatsby's GraphQL store */
const processGatsbyData = allStripeSku => {
  const initialProducts = {}
  const initialSkus = {}

  allStripeSku.group.forEach(group => {
    const edge =
      group.edges.find(({ node }) => {
        if (
          !node.attributes ||
          !node.attributes.color ||
          !node.product ||
          !node.product.metadata ||
          !node.product.metadata.defaultColor
        ) {
          return false
        }

        return node.attributes.color === node.product.metadata.defaultColor
      }) || group.edges[0]

    const sku = edge.node
    const product = { slug: sku.fields.slug, ...sku.product }
    product.skus = group.edges.reduce((acc, { node }) => {
      initialSkus[node.id] = node
      return [...acc, node]
    }, [])
    initialProducts[product.id] = product
  })
  return [initialProducts, initialSkus]
}

export default processGatsbyData
