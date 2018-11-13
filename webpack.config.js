const path = require('path');

module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: {
                loader: 'html2js-loader'
            }
        }]
    }
}

