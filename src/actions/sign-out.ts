import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { SIGN_OUT } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface SignOutAction extends Action<string> {}

const signOutActionCreator = (): SignOutAction => ({
  type: SIGN_OUT,
})

const signOut: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    await wallet.logout()

    dispatch(signOutActionCreator())
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default signOut
