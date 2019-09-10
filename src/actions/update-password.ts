import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { UPDATE_PASSWORD } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { PasswordFormData } from '../types/users'

export interface UpdatePasswordAction extends Action<string> {}

const updatePasswordActionCreator = (): UpdatePasswordAction => ({
  type: UPDATE_PASSWORD,
})

const updatePassword: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  passwordFormData: PasswordFormData,
) => async (dispatch, getState) => {
  try {
    await wallet.updatePassphrase(passwordFormData.oldPassword, passwordFormData.newPassword)

    notify('Password has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default updatePassword
