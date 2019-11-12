import { all } from 'redux-saga/effects'

import accountSaga from './account'
import appDetailsSaga from './app-details'
import appsSaga from './apps'
import landingSaga from './landing'
import personaSaga from './persona'
import personasSaga from './personas'
import searchSaga from './search'

function* rootSaga() {
  yield all([
    landingSaga(),
    personasSaga(),
    personaSaga(),
    appsSaga(),
    accountSaga(),
    appDetailsSaga(),
    searchSaga(),
  ])
}

export default rootSaga
