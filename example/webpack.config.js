module.exports = {
    entry: './app.js',
    target: 'node',
    output: {
      filename: 'app.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.hbs$/,
          loader: __dirname + "/node_modules/handlebars-loader",
          query: {
    				helperDirs: [
    					__dirname + "/helpers"
    				]
    			}
        }
      ]
    }
};
