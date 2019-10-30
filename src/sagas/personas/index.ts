import { spawn } from 'redux-saga/effects'

import loadAppsSaga from './load-apps'
import loadPersonasSaga from './load-personas'

function* personasSaga() {
  yield spawn(loadPersonasSaga)
  yield spawn(loadAppsSaga)
}

export default personasSaga
