// 
// const withImages = require('next-images')

// module.exports = withImages({
//   inlineImageLimit: false,
//   // name: "[name].[hash].[ext]",
//   // webpack(config, options) {
//   //   return config
//   // }
// })

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.(jpg|png|gif|svg)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[contenthash].[ext]',
//             outputPath: 'static', // 硬盘路径
//             publicPath: '_next/static' // 网站路径
//           }
//         }
//       ]
//     })
//     return config
//   }
// }
