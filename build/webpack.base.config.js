const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(p) {
    path.resolve(__dirname, '../src', p)
}

module.exports = {
    entry: {
        main: './src/main.js' // 注意：这里默认的目录是根目录
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,   
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'
                ]
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        usedExports: true
    }
}