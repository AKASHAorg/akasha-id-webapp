import { spawn } from 'redux-saga/effects'

import loadProfilesSaga from './load-profiles'

function* profilesSaga() {
  yield spawn(loadProfilesSaga)
}

export default profilesSaga
