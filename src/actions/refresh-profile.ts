import { Action } from 'redux'
import { REFRESH_PROFILE } from '../consts/actions'

export interface RefreshProfileAction extends Action<string> {
  data: any
}

const refreshProfile = (data: any): RefreshProfileAction => ({
  data,
  type: REFRESH_PROFILE,
})

export default refreshProfile
