const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")


module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },

    resolve: {
        extensions: [".js"],
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
            }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
    ],
    },

    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from: path.resolve(__dirname, "src", "assets/img"),
                to: "assets/images"
            }],
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ]
    },        
}