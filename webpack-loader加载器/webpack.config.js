const path = require('path')// path从哪里来
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),//必须是一个动态的路径[此处要求一个绝对路径]
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader 负责将样式添加到DOM中
        // 多个loader时，是从右向左加载
        use: ['style-loader', 'css-loader'],
      },
      {// 处理less文件
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {// 处理样式文件中引用的图片
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 33000,
              name: 'img/[name].[ext]'
            },

          },
        ],
      }
    ],
  },

}