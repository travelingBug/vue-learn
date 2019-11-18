const path = require('path')// path从哪里来
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),//必须是一个动态的路径
    filename: 'bundle.js'
  }
}