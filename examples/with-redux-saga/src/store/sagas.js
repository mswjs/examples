import { put, call, takeLatest } from 'redux-saga/effects'

function login(username) {
  return fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
    }),
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
}

function* loginSaga(action) {
  const { response, error } = yield call(login, action.username)

  if (response) {
    const data = yield response.json()
    yield put({ type: 'LOGIN_SUCCESS', payload: data })
  } else {
    console.error(error.message)
  }
}

export default function* rootSaga() {
  yield takeLatest('LOGIN_REQUEST', loginSaga)
}
