import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FetchAppAction } from '../../actions/app-details/fetch-app'
import setAppActionCreator from '../../actions/app-details/set-app'
import { FETCH_APP } from '../../consts/actions/app-details'
import { wallet } from '../../did'

function* setApp(action: FetchAppAction) {
  try {
    const app = yield call([wallet, wallet.appInfo], action.id)

    yield put(setAppActionCreator(app))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* fetchAppSaga() {
  yield takeLatest(FETCH_APP, setApp)
}

export default fetchAppSaga
