module.exports = process.env.NODE_ENV === 'prod' ?
  require('./webpack.config.production.babel.js') :
  require('./webpack.config.development.babel.js');
