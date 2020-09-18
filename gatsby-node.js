const createPages = require('./src/gatsby/node/createPages/createPages')
const onCreateNode = require('./src/gatsby/node/onCreateNode/onCreateNode')

exports.onCreateNode = onCreateNode
exports.createPages = createPages
