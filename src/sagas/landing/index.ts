import { spawn } from 'redux-saga/effects'

import loadPublicProfilesSaga from './load-public-profiles'
import signInSaga from './sign-in'
import signUpSaga from './sign-up'

function* landingSaga() {
  yield spawn(loadPublicProfilesSaga)
  yield spawn(signInSaga)
  yield spawn(signUpSaga)
}

export default landingSaga
