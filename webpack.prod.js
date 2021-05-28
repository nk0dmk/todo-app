
const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {

    mode: 'production',
    output: {
        clean: true, // limpia el directorio dist
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/i,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'                
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer,
            new Terser
        ]
    },
    plugins: [
        new HtmlWebPack({
            // title: 'WebPack config title',
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
            // favicon: './src/favicon.ico',
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            //   { from: "src/favicon.ico"}
            ],
          }),
    ]
}