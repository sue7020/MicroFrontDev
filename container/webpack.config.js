const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer: {
        port : 8080,
    },
    plugins: [
        //  allows a build to provide or consume modules with other independent builds at runtime.
        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                microFrontEnd1 : 'microFrontEnd1@http://localhost:8081/remoteEntry.js',
                microFrontEnd2 : 'microFrontEnd2@http://localhost:8082/remoteEntry2.js'
            }
        }),
        new WebpackHtmlPlugin({
            template : './public/index.html'
        })
    ]
}