const createPages = require('./src/gatsby/node/createPages/index')
const onCreateNode = require('./src/gatsby/node/onCreateNode/index')

exports.onCreateNode = onCreateNode
exports.createPages = createPages
