// webpack.config.js
module.exports = {
    entry: "./public/js/client.js",
    output: {
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader?harmony" } // loaders can take parameters as a querystring
        ]
    },
    resolve: {
        // require('module') instead of require('module.js')
        extensions: ["", ".js", ".jsx", ".json"]
    }
};