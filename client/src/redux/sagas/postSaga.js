import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';

function* getPostSaga() {
  try {
    const { data: payload } = yield api.get('/posts');
    yield put({ type: actionTypes.POSTS_RECEIVED, payload });
  } catch (err) {
    yield put({ type: actionTypes.POSTS_REJECTED, error: err.message });
  }
}
export default function* watcherSaga() {
  yield takeEvery(actionTypes.POSTS_REQUESTED, getPostSaga);
}
