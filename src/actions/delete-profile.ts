import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { DELETE_PROFILE } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface DeleteProfileAction extends Action<string> {}

const deleteProfileActionCreator = (): DeleteProfileAction => ({
  type: DELETE_PROFILE,
})

const deleteProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  const state = getState()

  wallet.removeProfile(state.profile.userId)

  dispatch(deleteProfileActionCreator())
}

export default deleteProfile
