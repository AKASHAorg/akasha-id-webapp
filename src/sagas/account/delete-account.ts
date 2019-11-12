import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import deleteAccountActionCreator from '../../actions/account/delete-account'
import { START_DELETE_ACCOUNT } from '../../consts/actions/account'
import { wallet } from '../../did'

function* deleteAccountImplementation() {
  try {
    yield call([wallet, wallet.removeAccount])
    yield put(deleteAccountActionCreator())

    notify('Account has been deleted')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* deleteAccountSaga() {
  yield takeLatest(START_DELETE_ACCOUNT, deleteAccountImplementation)
}

export default deleteAccountSaga
