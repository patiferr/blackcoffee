const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    plugins: [
        new htmlwebpackplugin({
            template: './index.html',
            minify: false
        })
    ],
    module: {
        rules:[{
                test: /\.(sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
}