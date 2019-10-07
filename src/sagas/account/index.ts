import { spawn } from 'redux-saga/effects'

import updateAccountSaga from '../account/update-account'
import signOutSaga from './sign-out'

function* profileSaga() {
  yield spawn(signOutSaga)
  yield spawn(updateAccountSaga)
}

export default profileSaga
