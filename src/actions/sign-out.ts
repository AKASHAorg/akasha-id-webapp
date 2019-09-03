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
  await wallet.logout()
  dispatch(signOutActionCreator())
}

export default signOut
