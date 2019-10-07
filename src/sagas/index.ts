import { all } from 'redux-saga/effects'

import accountSaga from './account'
import appDetailsSaga from './app-details'
import appsSaga from './apps'
import landingSaga from './landing'
import profileSaga from './profile'

function* rootSaga() {
  yield all([landingSaga(), profileSaga(), appsSaga(), accountSaga(), appDetailsSaga()])
}

export default rootSaga
