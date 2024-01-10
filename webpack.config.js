// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory for the bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'webpack': path.resolve(__dirname, 'node_modules', 'webpack')
    },
    // Move the node configuration here
    // This resolves the syntax error you encountered
    node: {
      fs: 'empty',
    },
  },
};
