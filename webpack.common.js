const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",
            constant: __dirname + "/src/constant/",
            component: __dirname + "/src/script/component/"
        }
    },
    module: {
        rules: [
            {
                test: /(?<!leaflet).css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /leaflet.css$/ ,
                use: [
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            favicon: "./src/assets/favicon.ico"
        })
    ]
}