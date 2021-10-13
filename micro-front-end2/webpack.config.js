const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer: {
        port : 8082
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