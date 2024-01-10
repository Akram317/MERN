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
  },
<<<<<<< HEAD
  // Move the node configuration outside of the resolve section
  node: {
    fs: 'empty',
=======
  // Only include valid properties in the node configuration
  node: {
    __dirname: false,
    __filename: false,
    global: false,
>>>>>>> 8a1fcdfea06fc6105a479bd50a3abe53a307b30f
  },
};
