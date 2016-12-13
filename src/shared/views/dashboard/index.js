import { loadRoute, errorLoading } from 'utils/routes';

module.exports = {
  path: 'dashboard',
  getComponents(location:?Object, cb:Function) {
    System.import('./Dashboard')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
};
