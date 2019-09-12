import { all } from 'redux-saga/effects'

import appsSaga from './apps'
import landingSaga from './landing'
import profileSaga from './profile'

function* rootSaga() {
  yield all([landingSaga(), profileSaga(), appsSaga()])
}

export default rootSaga
