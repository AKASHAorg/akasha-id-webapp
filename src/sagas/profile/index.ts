import { spawn } from 'redux-saga/effects'

import createProfileSaga from './create-profile'
import deleteProfileSaga from './delete-profile'
import exportProfileSaga from './export-profile'
import loadProfileSaga from './load-profile'
import updateProfileSaga from './update-profile'

function* profileSaga() {
  yield spawn(loadProfileSaga)
  yield spawn(updateProfileSaga)
  yield spawn(createProfileSaga)
  yield spawn(deleteProfileSaga)
  yield spawn(exportProfileSaga)
}

export default profileSaga
