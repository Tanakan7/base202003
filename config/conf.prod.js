const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssRewritePlugin = require('css-rewrite-webpack-plugin')
const pathConf = require('./conf.path')
const confBase = require('./conf.base')

const extend = (env, argv) => ({
  plugins: [
    new webpack.DefinePlugin({
      MODE: JSON.stringify(argv.mode),
      APIMOCK_LOTTERY: {},
      HOST_PREFIX: JSON.stringify(pathConf.api[String(argv.deploy || 'local')]),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.ejs',
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        preserveLineBreaks: true,
        removeScriptTypeAttributes: true,
      },
    }),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ['i', 'b', 'span'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${pathConf.assetsDir}css/[name].css?v=[hash]`,
    }),
    new CssRewritePlugin({
      fileReg: new RegExp('css/.*.css'),
      processor: source => {
        const reg = `\\(\/img\/`
        return source.replace(new RegExp(reg, 'g'), '(../img/')
      },
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css\?v=.*/g,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/common/img'),
        to: `${pathConf.assetsDir}img`,
      },
    ]),
  ],
})

module.exports = (env, argv) => Object.assign(confBase(env, argv), extend(env, argv))
