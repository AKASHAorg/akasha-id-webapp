import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REQUEST_PROFILE } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'
import { RequestProfileResponse } from '../types/apps'
import hideAddAppModal from './hide-add-app-modal'
import setAddAppModalStep from './set-add-app-modal-step'

export interface RequestProfileAction extends Action<string>, RequestProfileResponse {}

const requestProfileActionCreator = (data: RequestProfileResponse): RequestProfileAction => ({
  ...data,
  type: REQUEST_PROFILE,
})

const requestProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    const response: RequestProfileResponse = await client.requestProfile()

    dispatch(setAddAppModalStep('request-profile'))
    dispatch(requestProfileActionCreator(response))
    dispatch(hideAddAppModal())
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default requestProfile
