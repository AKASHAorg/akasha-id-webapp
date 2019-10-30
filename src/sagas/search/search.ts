import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import setSearchResult from '../../actions/search/set-search-result'
import { SetSearchTextAction } from '../../actions/search/set-search-text'
import { SET_SEARCH_TEXT, START_SEARCHING } from '../../consts/actions/search'
import { wallet } from '../../did'
import { State } from '../../states'
import { Apps } from '../../types/apps'
import { Persona } from '../../types/users'

function* search(searchText: string) {
  try {
    const personas: Persona[] = yield call([wallet, wallet.personas])

    const appsList: Apps = []
    const allApps: Apps[] = yield all(
      personas.map(persona => call([wallet, wallet.apps], persona.id)),
    )
    allApps.forEach(appsPerPersona => appsList.push(...appsPerPersona))

    const filteredApps: Apps = appsList.filter(app => app.appInfo.name.match(searchText))
    const filteredPersonas = personas.filter(persona => persona.personaName.match(searchText))

    yield put(setSearchResult(filteredPersonas, filteredApps))
  } catch (e) {
    console.error(e)
  }
}

function* setSearchText(action: SetSearchTextAction) {
  yield search(action.searchText)
}

function* startSearching() {
  const state: State = yield select()

  yield search(state.search.searchText)
}

function* searchSaga() {
  yield takeLatest(START_SEARCHING, startSearching)
  yield takeLatest(SET_SEARCH_TEXT, setSearchText)
}

export default searchSaga
