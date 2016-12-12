import Home from './Home';
module.exports = {
  path: 'home',
  getComponents(location:?Object, cb:Function) {
    cb(null, Home);
  }
};
