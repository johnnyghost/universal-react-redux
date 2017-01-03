import REPOSITORY_CONSTANTS from 'store/constants/repository';

type FetchReposRequestType = {
  type: string;
}

type FetchReposSuccessType = {
  type: string;
  payload: ?any;
}

/**
 * Dispatch an action to request the repos.
 *
 * @method fetchReposRequest
 * @public
 *
 * @return {Object}
 */
export const fetchReposRequest = ():FetchReposRequestType => ({
  type: REPOSITORY_CONSTANTS.FETCH_REPOS_REQUEST
})

/**
 * Dispatch an action to the success of the fetch.
 *
 * @method fetchReposSuccess
 * @public
 *
 * @param {Array} repos The repos list
 *
 * @return {Object}
 */
export const fetchReposSuccess = (repos:Array):FetchReposSuccessType => ({
  type: REPOSITORY_CONSTANTS.FETCH_REPOS_SUCCESS,
  payload: repos
})
