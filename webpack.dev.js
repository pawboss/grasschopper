const
  {merge} = require('webpack-merge')
  common = require('./webpack.common.js')
;

module.exports = merge(common, {
  "mode": 'development',
  "watchOptions": {
    "ignored": /node_modules/,
  },
});