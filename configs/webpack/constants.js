var path = require('path');

module.exports.PATHS = {
  SOURCE: path.resolve(process.cwd(), 'src'),
  NODE_MODULES: path.resolve(process.cwd(), 'node_modules'),
  DIST: path.resolve(process.cwd(), 'dist')
};
