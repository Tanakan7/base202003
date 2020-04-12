const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const pathConf = require('./conf.path')
const confBase = require('./conf.base')

/**
 * ビルド時の設定
 * @param {Object} env
 * @param {Object} argv
 *   mode  : 'development' or 'production'
 *   deploy: 'stage' or 'prod' (build:stage, build:prod 実行時のみ)
 * @returns {Object}
 */
const extend = (env, argv) => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        MODE: JSON.stringify(argv.mode),
        SOME_API_MOCK_DATA: {},
        HOST_PREFIX: JSON.stringify(pathConf.api[String(argv.deploy || 'local')]),
        STATIC_PATH: JSON.stringify(pathConf.staticFiles[String(argv.deploy || 'local')]),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          preserveLineBreaks: true,
          removeScriptTypeAttributes: true,
        },
      }),
      // new OptimizeCssAssetsPlugin({
      //   assetNameRegExp: /\.css\?v=.*/g,
      // }),

      // new MiniCssExtractPlugin({ filename: '[name].css' }),
      new MiniCssExtractPlugin({
        filename: `${pathConf.assetsDir}css/[name].css?v=[hash]`,
      }),

      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../src/img'),
          to: `${pathConf.assetsDir}img`,
        },
      ]),
    ],
  }
}

module.exports = (env, argv) => Object.assign(confBase(env, argv), extend(env, argv))
