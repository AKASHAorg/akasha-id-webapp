import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, select, takeLatest } from 'redux-saga/effects'

import { StartUpdateAccountAction } from '../../actions/account/start-update-account'
import updateAccountActionCreator from '../../actions/account/update-account'
import { START_UPDATE_ACCOUNT } from '../../consts/actions/account'
import { wallet } from '../../did'
import { State } from '../../states'

function* updateAccountImplementation(action: StartUpdateAccountAction) {
  try {
    if (action.newPassword !== action.confirmPassword) {
      throw new Error('Password confirmation is incorrect')
    }

    yield call([wallet, wallet.updatePassphrase], action.oldPassword, action.newPassword)

    const state: State = yield select()

    yield call([wallet, wallet.updateProfileList], state.account.userId, {
      name: action.name,
    })

    const accountData = { ...action }
    delete accountData.type

    yield put(updateAccountActionCreator(accountData))

    notify('Account has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* updateAccountSaga() {
  yield takeLatest(START_UPDATE_ACCOUNT, updateAccountImplementation)
}

export default updateAccountSaga
