import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/';
import sagas from './sagas/';

/**
 * Configure store.
 *
 * @param {Object} initialState The initial state
 * @return {Object} store
 */
const configureStore = (initialState:?Object):Object => {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers, initialState);
  sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
