const path = require("path");
const webpack = require("webpack");

const config = {


  context: __dirname,
    entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',

/*   For Server Side rendering with Redux
    'webpack-hot-middleware/index?path=__webpack_hmr&timeout=2000'*/
    './src/index.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"

  },
  devServer: {
    hot : true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {

  config.entry = './src/index.jsx'
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;