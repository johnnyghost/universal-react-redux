module.exports = process.env.NODE_ENV === 'prod' ?
  require('./webpack.production.babel.js') :
  require('./webpack.development.babel.js');
