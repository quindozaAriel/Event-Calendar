module.exports = {
    // other options...
    module: {
      // `module.rules` is the same as `module.loaders` in 1.x
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          // `vue-loader` options goes here
          options: {
            // ...
            postcss: [require('postcss-cssnext')()]
          }
        }
      ]
    }
  }