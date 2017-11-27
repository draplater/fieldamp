var webpack = require("webpack");
var fs = require("fs");

module.exports = {
    entry: "./main.ts",
    output: {
        filename: "fieldamp.user.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.worker\.ts$/,
                use: [
                    {
                        loader: "worker-loader",
                        options: {
                            inline: true,
                            name: 'worker.js'
                        }
                    },
                    "awesome-typescript-loader?module=webworker"
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                exclude: /\.worker\.ts$/,
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.jsx?$/, use: ["babel-loader?presets=env"]}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: true, // or function/regex
            sourceMap: true
            // Further UglifyJs config
        }),
        new webpack.BannerPlugin({
            banner: fs.readFileSync(__dirname + "/banner", "utf-8"),
            raw: true
        })
    ],
    node: {
        fs: 'empty'
    }
};
