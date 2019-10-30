import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { put, select, takeLatest } from 'redux-saga/effects'

import { FetchAppAction } from '../../actions/app-details/fetch-app'
import setAppActionCreator from '../../actions/app-details/set-app'
import { FETCH_APP } from '../../consts/actions/app-details'
import { State } from '../../states'

function* setApp(action: FetchAppAction) {
  try {
    const state: State = yield select()

    const foundApp = state.apps.apps.find(app => app.id === action.id)!

    yield put(setAppActionCreator(foundApp))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* fetchAppSaga() {
  yield takeLatest(FETCH_APP, setApp)
}

export default fetchAppSaga
