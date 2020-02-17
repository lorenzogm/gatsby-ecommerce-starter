const slug = require('slug')

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // attach an slug to each sku
  if (node.internal.type === 'StripeSku') {
    createNodeField({
      node,
      name: 'slug',
      value: slug(node.attributes.name, slug.defaults.modes.rfc3986),
    })
  }
}

module.exports = onCreateNode
