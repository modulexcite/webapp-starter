module.exports = {
    entry: "mocha!./test/index",
    output: {
        path: "./build",
        filename: "test.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader?harmony" },
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: ["node_modules", "."]
    }
};