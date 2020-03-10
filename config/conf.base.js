const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const util = require('./util')
const pathConf = require('./conf.path')

// const getCssLoader = (mode) => {
//   const use = ['style-loader']
//   if(mode === 'production'){
//     use.push({
//       loader: MiniCssExtractPlugin.loader
//     })
//   }
//   use.push({
//     loader: 'css-loader',
//     options: {
//       url: false,
//       modules: true,
//       localIdentName:'[folder]__[local]',
//     }
//   },
//   {
//     loader: 'postcss-loader',
//   })
//   return use
// }

const getAssetPath = (mode) =>{
  return `${pathConf.host[mode]}${pathConf.projectPath}`
}

module.exports = (env, argv) => ({
  entry: {
    app:['@babel/polyfill',path.resolve(__dirname,'../src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname,`./${pathConf.buildDir}`),
    // filename: `${pathConf.assetsDir}js/[name].js?v=[hash]`,
    filename: '[name].js',
    publicPath: (argv.deploy) ? `${getAssetPath(argv.deploy)}` : ''
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // '@common': path.resolve(__dirname,'../src/common'),
      // '@pages': path.resolve(__dirname,'../src/pages'),
      '@components': path.resolve(__dirname,'../src/components'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.css?$/,
      //   exclude: /node_modules/,
      //   use: getCssLoader(argv.mode)
      // },
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //           regExp: /\/([a-zA-Z0-9_-]+)\/[a-zA-Z0-9_-]+\.(jpg|png|gif|svg)$/,
      //           name: '[1]/[name].[ext]',
      //           outputPath: `./${pathConf.assetsDir}img/`,
      //           publicPath: (path)=>{
      //             const excludeCommonImgPath = path.replace('img/','')
      //             return (argv.deploy) ? `${getAssetPath(argv.deploy)}${pathConf.assetsDir}img/${excludeCommonImgPath}`: `${getAssetPath('local')}${pathConf.assetsDir}img/${excludeCommonImgPath}`
      //           }
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader:'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'),
              emitWarning: true
            }
          },
        ]
      },
      // {
      //   test : /\.ejs$/,
      //   use  : [
      //     'html-loader',
      //     {
      //       loader:'ejs-html-loader',
      //       options:{
      //         isDev: argv.mode === 'development',
      //         hostPrefix: pathConf.api[String(argv.deploy || 'local')],
      //         componentData: util.getDirName('/src/components').reduce(
      //           (a,b) => {
      //             return Object.assign(a, {
      //                [b]:{
      //                  p: `${b}__`,
      //                  data: (()=>{
      //                    try{
      //                     return require(path.resolve(__dirname, `../src/components/${b}/data.json`))
      //                    }
      //                    catch(e){
      //                     return {}
      //                    }
      //                  })()
      //                 }
      //               })
      //           },{}),
      //       }
      //     }
      //   ]
      // },
    ]
  },
  // plugins: [
  //   //以下追記
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '../src/index.html'),
  //     filename: 'index.html'
  //   })
  // ]
})
