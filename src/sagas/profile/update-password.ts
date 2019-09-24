import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, takeLatest } from 'redux-saga/effects'

import { StartUpdatePasswordAction } from '../../actions/profile/start-update-password'
import { START_UPDATE_PASSWORD } from '../../consts/actions/profile'
import { wallet } from '../../did'

function* updatePasswordImplementation(action: StartUpdatePasswordAction) {
  try {
    yield call(
      [wallet, wallet.updatePassphrase],
      action.passwordFormData.oldPassword,
      action.passwordFormData.newPassword,
    )

    notify('Password has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* updatePasswordSaga() {
  yield takeLatest(START_UPDATE_PASSWORD, updatePasswordImplementation)
}

export default updatePasswordSaga
