import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UPDATE_PROFILE } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { ProfileFormData } from '../types/users'

export interface UpdateProfileAction extends Action<string>, ProfileFormData {}

const updateProfileActionCreator = (profileFormData: ProfileFormData): UpdateProfileAction => ({
  ...profileFormData,
  type: UPDATE_PROFILE,
})

const updateProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  profileFormData: ProfileFormData,
) => async (dispatch, getState) => {
  const state = getState()
  wallet.updateProfileList(state.profile.userId, { name: profileFormData.name })

  dispatch(updateProfileActionCreator(profileFormData))
}

export default updateProfile
