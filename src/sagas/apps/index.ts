import { spawn } from 'redux-saga/effects'

import addApp from './add-app'
import loadApps from './load-apps'
import removeApp from './remove-app'

function* appsSaga() {
  yield spawn(loadApps)
  yield spawn(addApp)
  yield spawn(removeApp)
}

export default appsSaga
