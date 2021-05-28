
const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true, // limpia el directorio dist
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
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            // title: 'WebPack config title',
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
            favicon: './src/favicon.ico',
        }),
        new MiniCssExtract({
            // filename: '[name].[fullhash].css',
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
              { from: "src/favicon.ico"}
            ],
          }),
    ]
}