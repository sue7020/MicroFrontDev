const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer: {
        port : 8082
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
    plugins: [
        new ModuleFederationPlugin({
            name : 'microFrontEnd2',
            filename : 'remoteEntry2.js',
            exposes : {
                './MicroFrontEnd2Index' : './src/index',
            }
        }),
        new WebpackHtmlPlugin({
            template : './public/index.html'
        })
    ]
};