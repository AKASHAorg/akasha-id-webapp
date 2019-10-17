import { call, put, takeLatest } from 'redux-saga/effects'

import { SearchAction } from '../../actions/search/search'
import setSearchResult from '../../actions/search/set-search-result'
import { SEARCH } from '../../consts/actions/search'
import { wallet } from '../../did'
import { Apps } from '../../types/apps'

function* searchImplementation(searchAction: SearchAction) {
  try {
    const apps: Apps = yield call([wallet, wallet.apps])

    const filteredApps: Apps = Object.fromEntries(
      Object.entries(apps).filter(([token, app]) => app.name.match(searchAction.searchText)),
    )

    yield put(setSearchResult(filteredApps))
  } catch (e) {
    console.error(e)
  }
}

function* searchSaga() {
  yield takeLatest(SEARCH, searchImplementation)
}

export default searchSaga
