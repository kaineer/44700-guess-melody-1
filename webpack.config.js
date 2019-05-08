const {join} = require('path');

const path = join(__dirname, `public`);

// Entry and output
const entry = `./src/index.js`;
const output = {
  filename: `bundle.js`,
  path
};

// DevServer config
const contentBase = path;              // take bundles from specified place
const compress = false;                // do not compress bundles
const port = 1337;                     // localhost:1337, ok
const devServer = {contentBase, compress, port};

// Rules to process sources
const babelize = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [`babel-loader`]
};
const rules = [babelize];

// Resolving configuration
const resolve = {
  extensions: [`.js`, `.jsx`]          // require jsx files without specifying extension
};

module.exports = {
  entry,
  output,
  devServer,
  module: {rules},
  resolve,
  devtool: `source-map`
};
