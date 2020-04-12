const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const pathConf = require('./conf.path')
const confBase = require('./conf.base')

/**
 * @param {object} env
 * @param {Object} argv
 *   mode  : 'development' or 'production'
 * @returns {Object}
 */
const extend = (env, argv) => ({
  devServer: {
    clientLogLevel: 'warning',
    contentBase: false,
    port: 3002,
    open: true,
    inline: true,
    hot: true,
    // quiet: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      MODE: JSON.stringify(argv.mode),
      // 'SOME_API_MOCK_DATA': JSON.stringify(require('./mock/sampleApi.json')),
      HOST_PREFIX: JSON.stringify(pathConf.api.local),
      STATIC_PATH: JSON.stringify(pathConf.staticFiles.local),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/img'),
        to: 'img',
      },
    ]),
  ],
})

module.exports = (env, argv) => Object.assign(confBase(env, argv), extend(env, argv))
