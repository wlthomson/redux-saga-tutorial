import { put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
