import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import createApp from './utils/createApp';
import routes from 'routes';
import { buildPage } from './utils/pageBuilder';

/**
 * Render.
 *
 * @param {Object} request The request object
 * @param {Object} response The reponse object
 */
export default function (request:Object, response:Object) {

  match({routes, location: request.url}, (err: ?Object, redirect: ?Object, props: ?Object) => {
    if (err) {
      response.status(500).json(err);
    } else if (redirect) {
      response.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const App = createApp(props);
      const component = renderToString(App);
      const html = buildPage(component)

      response.send(html);

    } else {
      response.sendStatus(404);
    }
  });
}
