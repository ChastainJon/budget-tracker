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
        }),
        new WebpackPwaManifest({
            name: "Budget Calculator",
            short_name: "Budget",
            description: "An app that allows you to budget.",
            start_url: "../index.html",
            background_color: "#ffffff",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
                src: path.resolve("./public/icons/icon-512x512"),
                sizes: [72, 96, 128, 144, 152, 192, 384, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
    mode: 'development'
}