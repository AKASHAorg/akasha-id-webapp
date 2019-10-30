import { spawn } from 'redux-saga/effects'

import fetchAppSaga from './fetch-app'
import removeAppSaga from './remove-app'

function* appsSaga() {
  yield spawn(fetchAppSaga)
  yield spawn(removeAppSaga)
}

export default appsSaga
