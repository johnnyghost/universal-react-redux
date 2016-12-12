import Dashboard from './Dashboard';
module.exports = {
  path: 'dashboard',
  getComponents(location:?Object, cb:Function) {
    cb(null, Dashboard);
  }
};
