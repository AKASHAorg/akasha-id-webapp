import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { SIGN_IN } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { Profile, SignInFormData } from '../types/users'

export interface SignInAction extends Action<string> {
  valid: boolean
  profile?: Profile
}

const signInActionCreator = (valid: boolean, profile?: Profile): SignInAction => ({
  valid,
  profile,
  type: SIGN_IN,
})

const signIn: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  formData: SignInFormData,
) => async (dispatch, getState) => {
  const state = getState()

  const users: Profile[] = wallet.publicProfiles()
  const profile: Profile | undefined = users.find(u => u.id === state.landing.userId)
  let action: SignInAction

  try {
    if (profile !== undefined) {
      await wallet.login(profile.id, formData.password)

      action = signInActionCreator(true, profile)
    } else {
      action = signInActionCreator(false)
    }
  } catch (e) {
    action = signInActionCreator(false)

    notify(`An error occurred: ${e}`)
  }

  dispatch(action)
}

export default signIn
