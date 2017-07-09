const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  target: 'node',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs',
  },
  externals: [
      /^(?!\.|\/).+/i,
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.node$/,
        loader: "node-loader"
      },
    ],
    rules: [
      {
        test: /\.js$/,
        loader: "transform-loader?brfs",
        include: path.resolve(__dirname, "node_modules/muri/lib/index.js")
      }
   ]
  },
  resolve: {
    extensions: ['.js', '.json', '.node'],
  },
};
