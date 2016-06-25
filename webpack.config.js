var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map', //不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的。
  entry: './src/index.js',  // 進入點
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',  // 輸出的檔案名稱
  },
  module: {
    loaders: [{
      test: /\.js$/,   // 針對 js 檔
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/   // 不要處理 3rd party 的 code
    }, {
      test: /\.css$/,  // 針對 css 檔
      loaders: ['style', 'css'],
      exclude: /node_modules/   // 不要處理 3rd party 的 code
    }]
  }
};

//why not use ./dist, use path.join(__dirname, 'dist')
