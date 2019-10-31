const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  const production = env === 'production' || process.env.NODE_ENV === 'production';
  return {
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-maps' : 'inline-source-map',
    entry: './src/main.ts',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
      historyApiFallback: true,
      open: !process.env.CI,
      port: 9000,
      lazy: false
    },
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.ts$/, use: ['ts-loader'], exclude: /node_modules/ },
        { test: /\.html$/, use: 'html-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.ejs' })]
  }
}
