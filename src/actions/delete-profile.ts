import { notify } from '@akashaproject/design-system/dist/components/Notification'
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
  try {
    const state = getState()

    await wallet.removeProfile(state.profile.userId)

    dispatch(deleteProfileActionCreator())

    notify('Profile has been deleted')
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default deleteProfile
