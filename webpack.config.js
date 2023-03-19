/* eslint-disable no-undef */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

/* eslint-disable no-undef */
module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, 'src', 'js/index.js'),
    },
    output: {
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]', /* Keeps the original name of the asset */
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
    },
    plugins: [
      new htmlWebpackPlugin({
        title: "Library App",
        filename: "index.html",
        template: path.resolve(__dirname, 'src', 'index.html'),
      })

    ]

}
