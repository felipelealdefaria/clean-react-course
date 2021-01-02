const path = require('path')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx', // initial react file
  output: {
    path: path.join(__dirname, 'public/js'), // output directory for bundle,
    publicPath: '/public/js',
    filename: 'bundle.js' // generate name bundle file
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src') // imports paths - (replace @ for src),
    }
  },
  devServer: {
    contentBase: './public', // file in browser
    writeToDisk: true, // for bundle generate and listen server,
    historyApiFallback: true // map routes
  },
  externals: { // generate bundle file without this libs
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}