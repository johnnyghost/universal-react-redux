import { loadRoute, errorLoading } from 'utils/routes';

module.exports = {
  path: 'home',
  getComponents(location:?Object, cb:Function) {
    System.import('./Home')
      .then(loadRoute(cb))
      .catch(errorLoading)
  }
};
