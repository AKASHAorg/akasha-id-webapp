import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, select, takeLatest } from 'redux-saga/effects'

import removeAppActionCreator from '../../actions/app-details/remove-app'
import setRedirectToApps from '../../actions/app-details/set-redirect-to-apps'
import { START_REMOVE_APP } from '../../consts/actions/app-details'
import { wallet } from '../../did'
import { State } from '../../states'

function* removeApp() {
  try {
    const state: State = yield select()
    const token = state.appDetails.token
    if (!token) {
      throw new Error('App token is missing')
    }

    yield call([wallet, wallet.removeApp], token)

    yield put(removeAppActionCreator())
    notify('App has been removed')

    yield put(setRedirectToApps(true))
    yield put(setRedirectToApps(false))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* removeAppSaga() {
  yield takeLatest(START_REMOVE_APP, removeApp)
}

export default removeAppSaga
