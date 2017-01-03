import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { githubService } from 'core/services'
import REPOSITORY_CONSTANTS from 'store/constants/repository';

/**
 * Fetch the repos.
 */
function *fetchRepos():void {
  try {
    const repos = yield call(githubService.getRepos);
    yield put({ type: REPOSITORY_CONSTANTS.FETCH_REPOS_SUCCESS, payload: repos });
  } catch (error) {
    yield put({ type: REPOSITORY_CONSTANTS.ERROR });
  }
}

/**
 * Watch fetch repos saga.
 */
export function* watchGetRepos():void {
  yield* takeEvery(REPOSITORY_CONSTANTS.FETCH_REPOS_REQUEST, fetchRepos);
}
