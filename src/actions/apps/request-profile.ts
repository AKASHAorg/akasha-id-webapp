import { Action } from 'redux'
import { REQUEST_PROFILE } from '../../consts/actions/apps'
import { RequestProfileResponse } from '../../types/apps'

export interface RequestProfileAction extends Action<string>, RequestProfileResponse {}

const requestProfile = (response: RequestProfileResponse): RequestProfileAction => ({
  ...response,
  type: REQUEST_PROFILE,
})

export default requestProfile
