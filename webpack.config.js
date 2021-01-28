const path = require('path')

module.exports = {
  entry: './lession1/demo3/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './lession1/demo3/dist')
  }
}
