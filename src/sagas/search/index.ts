import { spawn } from 'redux-saga/effects'

import searchSaga from './search'

function* searchPageSaga() {
  yield spawn(searchSaga)
}

export default searchPageSaga
