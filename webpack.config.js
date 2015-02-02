// webpack.config.js
module.exports = {
    entry: "./public/js/client.js",
    output: {
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader?harmony" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192"},
        ]
    },
    resolve: {
        // require('module') instead of require('module.js')
        extensions: ["", ".js", ".jsx", ".json"]
    }
};