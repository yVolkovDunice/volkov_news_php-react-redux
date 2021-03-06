import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';

function* signUpActionSaga({ payload }) {
  try {
    const { data } = yield api.post('/register', payload);
    if (data.errors) {
      throw new Error(data.errors);
    } else {
      yield put({ type: actionTypes.SING_UP_RECEIVED, payload: data });
      if (data) {
        yield put({ type: actionTypes.LOGIN_REQUESTED, payload });
      }
    }
  } catch (error) {
    yield put({ type: actionTypes.SING_UP_REJECTED, error: error.message });
  }
}

function* loginActionSaga({ payload }) {
  try {
    const { data } = yield api.post('/login', payload);
    yield localStorage.setItem('token', JSON.stringify(data));
    yield put({ type: actionTypes.LOGIN_RECEIVED, data });
  } catch (err) {
    yield put({ type: actionTypes.LOGIN_REJECTED, error: err.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.SING_UP_REQUESTED, signUpActionSaga);
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginActionSaga);
}
