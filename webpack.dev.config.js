const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world':'./src/hellow-world.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    //publicPath: 'dist/'
    publicPath: ''
  },
  mode: 'development',
  devServer:{
    contentBase:  path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jfif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      }, {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')

      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks:['hello-world'],
      title: 'hello world',
      template: 'src/page-template.hbs',
      description: 'Hello world'
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks:['kiwi'],
      title: 'kiwi',
      template: 'src/page-template.hbs',
      description: 'kiwi'
    })
  ]
}