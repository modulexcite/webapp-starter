module.exports = {
    entry: "mocha!./test/index",
    output: {
        path: "./build",
        filename: "test.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/,
              loader: "babel?optional=es7.objectRestSpread",
              exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: ["node_modules", "."]
    }
};
