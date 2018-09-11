const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool :"#source-map",
    entry:{
        app: './src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist/'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'}
                    ],
                    // publicPath:'../'
                })
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:50000,
                    }
                }]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[{
                    loader:"html-loader",
                    options:{
                        minimize:true
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:path.join(__dirname,"../dist/index.html"),
            template:path.join(__dirname,"../index.html")
        }),
    ]
};