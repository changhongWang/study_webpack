const path = require('path');

module.exports = {
  // 入口
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  // 打包文件输出
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
};