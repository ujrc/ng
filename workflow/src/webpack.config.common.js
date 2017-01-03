var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        'app':'./app/main.ts'
    },
    resolve:{
        extensions:['.js','.ts']
    },
    module:{
        loaders:[
            {
        test:/\.ts$/,
            loaders:[
                'awesome-typescript-loader',
                'angular2-template-loader',
                'angular2-router-loader'
            ]
            },
            {
                test:/\.html$/,
                loader:'html'
            },
            {
                test:/\.css$/,
                loader:'raw'
            },           
    ]
    },
     plugins: [
                new HtmlWebpackPlugin({
                    template:'./index.html'
                }),
                new webpack.ContextReplacementPlugin(
                    //The (\\|\/) piece accounts for path separators in *nix and windows
                    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                    './src' //location of yur src
                )

            ]

};