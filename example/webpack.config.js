module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    app: ['./example/main.js']
  },
  output: {
    filename: 'output.js',
    pathinfo: true
  },
  optimization: {
    chunkIds: 'named',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
