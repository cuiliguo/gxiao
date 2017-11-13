var webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        open: true,
        port: 9199,
        compress: true,
        inline: true,
        hot: true
    },
    devtool: 'cheap-eval-source-map',
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}