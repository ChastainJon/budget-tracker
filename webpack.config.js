const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPLugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackPwaManifest = require("webpack-pwa-manifest")

module.exports = {
    entry:{
        app: './public/js/index.js',
        table: './public/js/table.js',
        chart: './public/js/chart.js',
        transaction: './public/js/transaction.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/public/dist"

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPLugin({
            analyzerMode: "static",
        })
    ],
    mode: 'development'
}