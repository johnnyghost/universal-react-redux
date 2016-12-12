import ReactDOM from 'react-dom';
import createApp from './utils/createApp';
import Root from './utils/Root';

ReactDOM.render(
  createApp()(Root),
  document.getElementById('root')
);
