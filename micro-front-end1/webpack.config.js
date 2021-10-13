const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode : 'development',
    devServer: {
        port : 8081
    },

    // loader 설정
    module: {
        rules: [
         {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [{
           loader: 'babel-loader',
           options: {
            presets: [
             "@babel/preset-env",
             "@babel/preset-react"
            ]
           }
          }]
         },
        ]
    },

    // microFront1 export
    plugins: [
        new ModuleFederationPlugin({
            name : 'microFrontEnd1',
            filename : 'remoteEntry.js',
            exposes : {
                './MicroFrontEnd1Index' : './src/index',
            }
        }),
        new WebpackHtmlPlugin({
            template : './public/index.html'
        })
    ]
};