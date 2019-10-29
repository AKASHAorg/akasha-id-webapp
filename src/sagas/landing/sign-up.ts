import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import signUpActionCreator from '../../actions/landing/sign-up'
import { StartSignUpAction } from '../../actions/landing/start-sign-up'
import { START_SIGN_UP } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Account } from '../../types/users'

function* signUpImplementation(action: StartSignUpAction) {
  try {
    const userId = yield call(
      [wallet, wallet.signup],
      action.formData.name,
      action.formData.password,
    )
    const publicAccounts: Account[] = yield call([wallet, wallet.publicAccounts])
    const account: Account | undefined = publicAccounts.find(u => u.id === userId)

    if (account !== undefined) {
      yield put(signUpActionCreator(account))
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* signUpSaga() {
  yield takeLatest(START_SIGN_UP, signUpImplementation)
}

export default signUpSaga
