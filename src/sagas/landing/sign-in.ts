import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import signInActionCreator from '../../actions/landing/sign-in'
import { StartSignInAction } from '../../actions/landing/start-sign-in'
import { START_SIGN_IN } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Account } from '../../types/users'

function* signInImplementation(action: StartSignInAction) {
  try {
    const accounts: Account[] = yield call([wallet, wallet.publicAccounts])
    const account: Account | undefined = accounts.find(u => u.id === action.userId)

    if (account !== undefined) {
      yield call([wallet, wallet.login], account.id, action.formData.password)
      yield put(signInActionCreator(account))
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* signInSaga() {
  yield takeLatest(START_SIGN_IN, signInImplementation)
}

export default signInSaga
