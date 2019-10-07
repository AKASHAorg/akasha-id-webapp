import { spawn } from 'redux-saga/effects'

import addAppSaga from './add-app'
import loadAppsSaga from './load-apps'

function* appsSaga() {
  yield spawn(loadAppsSaga)
  yield spawn(addAppSaga)
}

export default appsSaga
