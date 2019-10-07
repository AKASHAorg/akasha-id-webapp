import { spawn } from 'redux-saga/effects'

import fetchClaimSaga from './fetch-claim'
import removeAppSaga from './remove-app'

function* appsSaga() {
  yield spawn(fetchClaimSaga)
  yield spawn(removeAppSaga)
}

export default appsSaga
