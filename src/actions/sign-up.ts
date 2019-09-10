import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { SIGN_UP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { Profile, SignUpFormData } from '../types/users'

export interface SignUpAction extends Action<string> {
  valid: boolean
  profile?: Profile
}

const signUpActionCreator = (valid: boolean, profile?: Profile): SignUpAction => ({
  valid,
  profile,
  type: SIGN_UP,
})

const signUp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  formData: SignUpFormData,
) => async dispatch => {
  let action: SignUpAction

  try {
    const userId = await wallet.signup(formData.name, formData.password)
    const users: Profile[] = wallet.publicProfiles()
    const profile: Profile | undefined = users.find(u => u.id === userId)

    action = signUpActionCreator(true, profile)
  } catch (e) {
    action = signUpActionCreator(false)

    notify(`An error occurred: ${e}`)
  }

  dispatch(action)
}

export default signUp
