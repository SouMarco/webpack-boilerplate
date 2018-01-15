const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractPlugin = new ExtractTextPlugin({
    filename: './assets/css/app.css'
  });

const config = {
  context: path.resolve(__dirname, 'src'),  
  entry: './app.js', // removing 'src' directory from entry point, since 'context' is taking care of that
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    stats: 'errors-only',
    open: true,
    compress: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      extractPlugin
  ],
  module: {
      rules: [
          //html-loader
        {
            test: /\.html$/, 
            use: ['html-loader']
        },
        //file-loader(for images)
        {
            test: /\.(jp(e*)g|png|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: './assets/media/' //npm run dev serve static content from src folder (html-loader helps). for npm run build:prod, static content is served from dist.
                }
              }
            ]
          },
          //css and sass loaders
          {
            test: /\.scss$/,
            include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
            use: extractPlugin.extract({
              use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                 },
                 {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: true
                      }
                 }],
              fallback: 'style-loader'
            })
          }
      ]
  }
}

module.exports = config;