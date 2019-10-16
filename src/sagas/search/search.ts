import { call, put, takeLatest } from 'redux-saga/effects'

import { SearchAction } from '../../actions/search/search'
import setSearchResult from '../../actions/search/set-search-result'
import { SEARCH } from '../../consts/actions/search'
import { wallet } from '../../did'
import { AppsList } from '../../types/apps'

function* searchImplementation(searchAction: SearchAction) {
  try {
    const apps: AppsList = yield call([wallet, wallet.apps])

    const filteredApps: AppsList = Object.fromEntries(
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
