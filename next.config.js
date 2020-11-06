// const withLess = require('@zeit/next-less')
// module.exports =withLess ({
//   webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
//     // Perform customizations to webpack config
    
//     // Important: return the modified config
//     // cssModules: true,
//     // cssLoaderOptions: {
//     //     importLoaders: 1,
//     //     localIdentName: "[local]___[hash:base64:5]",
//     //   }
//     cssModules = true,
//     config.module.rules.push({
//         test: /\.less$/,
//         use: [{
//             loader: "style-loader"
//         }, {
//             loader: "css-loader"
//         }, {
//             loader: "less-loader", options: {
//                 sourceMap: true
//             }
//         }],   
//         exclude:require('path').resolve(__dirname,'node_modules','pages/styles/globals.css','pages/styles/Home.module.css')
//         // exclude:["./pages/styles/globals.css","./pages/styles/Home.module.css"]
//     })
    
//     return config
//   },
// //   webpackDevMiddleware: config => {
// //     // Perform customizations to webpack dev middleware config
// //     // console.log(config, '@@')
// //     // Important: return the modified config
// //     return config
// //   }
// })
// const withImages = require('next-images')
// module.exports = withImages(
//     {compress: false},

// )
// module.exports = {
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' },
        
//       }
//     },
//     exportTrailingSlash: true, // make /about becomes /about/index.html and is routable via /about/.
//   lessLoaderOptions: {
//     modifyVars: {
//       'primary-color': '#9324af',
//       'secondary-color': '#333333'
//     },
//     javascriptEnabled: true
//   }
// }
module.exports = {
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/404': { page: '/' },
          
        }
      },
    // exportTrailingSlash: true, // make /about becomes /about/index.html and is routable via /about/.
    // lessLoaderOptions: {
    //   modifyVars: {
    //     'primary-color': '#9324af',
    //     'secondary-color': '#333333'
    //   },
    //   javascriptEnabled: true
    // },
    externals: {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React',
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM',
        },
      }
  }