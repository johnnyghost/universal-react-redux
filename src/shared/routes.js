import routes from 'views';
import { Main } from 'components';

const configuration ={
  path: '/',
  component: Main,
  childRoutes: routes
};

export default configuration;
