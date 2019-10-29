import { spawn } from 'redux-saga/effects'

import deleteAccountSaga from './delete-account'
import signOutSaga from './sign-out'
import updateAccountSaga from './update-account'

function* profileSaga() {
  yield spawn(signOutSaga)
  yield spawn(updateAccountSaga)
  yield spawn(deleteAccountSaga)
}

export default profileSaga
