import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import signOutActionCreator from '../../actions/profile/sign-out'
import { START_SIGN_OUT } from '../../consts/actions/profile'
import { wallet } from '../../did'

function* signOutImplementation() {
  try {
    yield call([wallet, wallet.logout])
    yield put(signOutActionCreator())
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* signOutSaga() {
  yield takeLatest(START_SIGN_OUT, signOutImplementation)
}

export default signOutSaga
