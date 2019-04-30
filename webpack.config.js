const {join} = require('path');

const path = join(__dirname, `public`);
const contentBase = path;

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path
  },
  devServer: {
    contentBase,
    compress: false,
    port: 1337
  },
  module: {
    rules: [
      {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: {
	  loader: `babel-loader`
	}
      }
    ]
  },
  devtool: `source-map`
};

