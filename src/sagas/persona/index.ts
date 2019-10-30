import { spawn } from 'redux-saga/effects'

import createPersonaSaga from './create-persona'
import deletePersonaSaga from './delete-persona'
import exportPersonaSaga from './export-persona'
import loadAppsSaga from './load-apps'
import loadPersonaSaga from './load-persona'
import updatePersonaSaga from './update-persona'

function* personaSaga() {
  yield spawn(loadPersonaSaga)
  yield spawn(updatePersonaSaga)
  yield spawn(createPersonaSaga)
  yield spawn(deletePersonaSaga)
  yield spawn(exportPersonaSaga)
  yield spawn(loadAppsSaga)
}

export default personaSaga
