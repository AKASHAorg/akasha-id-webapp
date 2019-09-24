import { spawn } from 'redux-saga/effects'

import addAppSaga from './add-app'
import loadAppsSaga from './load-apps'
import removeAppSaga from './remove-app'

function* appsSaga() {
  yield spawn(loadAppsSaga)
  yield spawn(addAppSaga)
  yield spawn(removeAppSaga)
}

export default appsSaga
