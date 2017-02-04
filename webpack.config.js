var path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'dist')
  }
}