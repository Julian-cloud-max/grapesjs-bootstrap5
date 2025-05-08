const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'grapesjs-bootstrap.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'grapesjs-bootstrap',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  externals: {
    grapesjs: 'grapesjs'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  }
}; 