import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UPDATE_PROFILE } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'

export interface UpdateProfileAction extends Action<string> {
  username: string
  password: string
}

const updateProfileActionCreator = (username: string, password: string): UpdateProfileAction => ({
  username,
  password,
  type: UPDATE_PROFILE,
})

const updateProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  username,
  password,
) => async (dispatch, getState) => {
  dispatch(updateProfileActionCreator(username, password))

  const state = getState()

  if (state.profile.profileFormValid) {
    wallet.updateProfileList(state.profile.userId, { name: username })
  }
}

export default updateProfile
