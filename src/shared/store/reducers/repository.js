import REPOSITORY_CONSTANTS from 'store/constants/repository';
import { createReducer } from 'store/utils';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  list: [],
  isLoading: false
};

/**
 * Fetch Repos success
 *
 * @method
 *
 * @param  {Object} state The state
 * @param  {Object} data  The data received
 *
 * @return {Object} The current state
 */
const fetchReposSuccess = (state:Object, data:Object):Object => {
  return {
    ...state,
    list: data,
    isLoading: false
  };
}

/**
 * Fetch Repos request
 *
 * @method
 *
 * @param  {Object} state The state
 *
 * @return {Object} The current state
 */
const fetchReposRequest = (state:Object):Object => {
  return {
    ...state,
    list: [],
    isLoading: true
  };
}

export default createReducer(initialState, {
  [REPOSITORY_CONSTANTS.FETCH_REPOS_REQUEST]: fetchReposRequest,
  [REPOSITORY_CONSTANTS.FETCH_REPOS_SUCCESS]: fetchReposSuccess
});
