import { spawn } from 'redux-saga/effects'

import deleteProfileSaga from './delete-profile'
import exportProfileSaga from './export-profile'
import loadProfileSaga from './load-profile'
import signOutSaga from './sign-out'
import updatePasswordSaga from './update-password'
import updateProfileSaga from './update-profile'

function* profileSaga() {
  yield spawn(loadProfileSaga)
  yield spawn(signOutSaga)
  yield spawn(deleteProfileSaga)
  yield spawn(updateProfileSaga)
  yield spawn(updatePasswordSaga)
  yield spawn(exportProfileSaga)
}

export default profileSaga
