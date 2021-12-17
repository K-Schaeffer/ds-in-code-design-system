const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const entries = require('./webpack_entries.json');

module.exports = () => {
  const prod = {
      entry: entries,
      mode: 'production',
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
      externals: [
          /lit/gi,
          /lit\/decorators/gi,
          /lit\/directives\/class-map/gi,
          /lit\/directives\/if-defined/gi,
          /@meiuca/gi,
      ]
  }

  return merge(common, prod);
}