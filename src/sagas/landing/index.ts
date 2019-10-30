import { spawn } from 'redux-saga/effects'

import loadPublicAccountsSaga from './load-public-accounts'
import signInSaga from './sign-in'
import signUpSaga from './sign-up'

function* landingSaga() {
  yield spawn(loadPublicAccountsSaga)
  yield spawn(signInSaga)
  yield spawn(signUpSaga)
}

export default landingSaga
