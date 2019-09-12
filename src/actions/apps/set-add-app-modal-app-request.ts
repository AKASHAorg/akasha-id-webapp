import { Action } from 'redux'

import { SET_ADD_APP_MODAL_APP_REQUEST } from '../../consts/actions/apps'
import { AppRequest } from '../../types/apps'

export interface SetAddAppModalAppRequestAction extends Action<string> {
  appRequest: AppRequest
}

const setAddAppModalAppRequest = (appRequest: AppRequest): SetAddAppModalAppRequestAction => ({
  appRequest,
  type: SET_ADD_APP_MODAL_APP_REQUEST,
})

export default setAddAppModalAppRequest
