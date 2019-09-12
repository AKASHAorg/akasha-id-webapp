import { spawn } from 'redux-saga/effects'

import deleteProfile from './delete-profile'
import exportProfile from './export-profile'
import loadProfile from './load-profile'
import signOut from './sign-out'
import updatePassword from './update-password'
import updateProfile from './update-profile'

function* profileSaga() {
  yield spawn(loadProfile)
  yield spawn(signOut)
  yield spawn(deleteProfile)
  yield spawn(updateProfile)
  yield spawn(updatePassword)
  yield spawn(exportProfile)
}

export default profileSaga
