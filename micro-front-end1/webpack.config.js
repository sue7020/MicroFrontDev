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
                // 둘다 사용가능 나중에 경우에따라 바꿀수 있음
                './MicroFrontEnd1Index' : './src/components/MoviePart',
                // './MicroFrontEnd1Index' : './src/index',
            },
            shared: ['react', 'react-dom'] //container의 react, react-dom을 공유해서 씀 -> 자체로 실행하려면 주석처리 해야함
        }),
        new WebpackHtmlPlugin({
            template : './public/index.html'
        })
    ]
};