import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { LOAD_PROFILE } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { ProfileData } from '../types/users'

export interface LoadProfileAction extends Action<string> {
  profileData?: ProfileData
}

const loadProfileActionCreator = (profileData?: ProfileData): LoadProfileAction => ({
  profileData,
  type: LOAD_PROFILE,
})

const loadProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    const data = await wallet.profile()

    dispatch(loadProfileActionCreator(data))
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default loadProfile
