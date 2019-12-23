const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist')
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    
};