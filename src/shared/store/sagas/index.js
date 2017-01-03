import { fork } from 'redux-saga/effects';
import { github } from './github/';
/**
 * Saga root.
 */
export default function* root():void {
  yield fork(github);
}
