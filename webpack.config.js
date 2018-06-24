module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './dist/js/game.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
