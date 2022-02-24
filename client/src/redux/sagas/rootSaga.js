import { all, call } from 'redux-saga/effects';

import getPostSaga from './postSaga';

export default function* rootSaga() {
  yield all([
    call(getPostSaga),
  ]);
}
