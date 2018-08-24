var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'index.[hash:8].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'weekly-homework-1',
            template:'./src/index.tplt.html'
        })
    ]

}