import { fork } from 'redux-saga/effects';
import { watchGetRepos } from './watchGetRepos';

/**
 * Github saga root.
 */
export function* github():void {
  yield fork(watchGetRepos);
}
