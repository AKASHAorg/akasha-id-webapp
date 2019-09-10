import { notify } from '@akashaproject/design-system/dist/components/Notification'
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
  try {
    const state = getState()
    wallet.updateProfileList(state.profile.userId, { name: profileFormData.name })

    const data = { ...profileFormData }
    delete data.name
    wallet.updateProfile(data)

    dispatch(updateProfileActionCreator(profileFormData))

    notify('Profile has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default updateProfile
