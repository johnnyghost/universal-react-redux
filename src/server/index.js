import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import routes from 'routes';
import configureStore from 'store/configureStore';
import createApp from './utils/createApp';
import Root from './utils/Root';
import { buildPage } from './utils/pageBuilder';

const store = configureStore();

/**
 * Render.
 *
 * @param {Object} request The request object
 * @param {Object} response The reponse object
 */
export default function (request:Object, response:Object) {

  /**
   * Render the success view.
   *
   * @method renderSuccess
   * @param  {Object} props The props object
   */
  const renderSuccess = (props:Object) => {
    const component = renderToString(createApp(props, store)(Root));
    const html = buildPage(component, store);

    response.send(html);
  }

  /**
   * Render redirect view
   *
   * @method renderRedirect
   * @param {Object} redirect The redirect object
   */
  const renderRedirect = (redirect:Object) => {
    response.redirect(302, redirect.pathname + redirect.search);
  }

  /**
   * Render not found route.
   *
   * @method renderNotFound
   */
  const renderNotFound = () => {
    response.sendStatus(404);
  }

  /**
   * Render error view.
   *
   * @method renderError
   * @param  {Object} err The error object
   */
  const renderError = (err:Object) => {
    response.status(500).json(err);
  }

  match({routes, location: request.url}, (err: ?Object, redirect: ?Object, props: ?Object) => {
    if (err) {
      renderError(err);
    } else if (redirect) {
      renderRedirect(redirect);
    } else if (props) {
      renderSuccess(props);
    } else {
      renderNotFound();
    }
  });
}
