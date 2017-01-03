import REPOSITORY_CONSTANTS from 'store/constants/repository';
import { createReducer } from 'store/utils';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  catalogue: [],
  isLoading: false
};

/**
 * Fetch catalogue success
 *
 * @method
 *
 * @param  {Object} state The state
 * @param  {Object} data  The data received
 *
 * @return {Object} The current state
 */
const fetchCatalogueSuccess = (state:Object, data:Object):Object => {
  return {
    ...state,
    catalogue: data,
    isLoading: false
  };
}

/**
 * Fetch catalogue request
 *
 * @method
 *
 * @param  {Object} state The state
 *
 * @return {Object} The current state
 */
const fetchCatalogueRequest = (state:Object):Object => {
  return {
    ...state,
    catalogue: [],
    isLoading: true
  };
}

export default createReducer(initialState, {
  [REPOSITORY_CONSTANTS.FETCH_CATALOGUE_REQUEST]: fetchCatalogueRequest,
  [REPOSITORY_CONSTANTS.FETCH_CATALOGUE_SUCCESS]: fetchCatalogueSuccess
});
