const path = require('path')


module.export = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts')
    }
}