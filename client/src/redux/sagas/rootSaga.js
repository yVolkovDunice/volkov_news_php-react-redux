import { all, call } from 'redux-saga/effects';

import getPostSaga from './postSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([
    call(getPostSaga),
    call(authSaga),
  ]);
}
