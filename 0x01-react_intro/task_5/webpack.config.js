// webpack.config.js
const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
       static: {
           directory: path.join(__dirname, 'dist'),
       },
       hot: true,
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader'],
           },
           {
               test: /\.(png|jpg|gif)$/i,
               use: [
                   {
                       loader: 'url-loader',
                       options: {
                           limit: 8192,
                       },
                   },
               ],
           },
       ],
   },
   devtool: 'inline-source-map',
};

