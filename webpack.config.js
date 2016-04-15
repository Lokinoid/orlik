var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  
  entry:  __dirname + "/src/js/main",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json', '.min.js', 'scss', 'css']
  },
  
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"] },
      { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader") },
    ]
  },
  
  postcss:  [ "autoprefixer" ],
  
  plugins: [
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("main.css", {
        allChunks: true
    })
  ],
}
