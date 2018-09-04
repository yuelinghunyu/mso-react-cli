const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:['babel-polyfill','./src/main.js'],
    output:{
        filename:'js/main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:"./dist",
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            hash:true, //会在打包好的bundle.js后面加上hash串
        })
    ]
};