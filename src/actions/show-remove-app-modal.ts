import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { SHOW_REMOVE_APP_MODAL } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { Claim } from '../types/apps'

export interface ShowRemoveAppModalAction extends Action<string> {
  token: string
  claim?: Claim
}

export const showRemoveAppModalActionCreator = (
  token: string,
  claim?: Claim,
): ShowRemoveAppModalAction => ({
  token,
  claim,
  type: SHOW_REMOVE_APP_MODAL,
})

const showRemoveAppModal: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  token: string,
) => async (dispatch, getState) => {
  try {
    const profile = await wallet.profile()
    const claim = await wallet.getClaim(token)
    claim.attributes.forEach((attr: string) => {
      claim[attr] = profile[attr]
    })

    dispatch(showRemoveAppModalActionCreator(token, claim))
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default showRemoveAppModal
