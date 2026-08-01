// portal-os-v4/webpack.config.js

module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
};
