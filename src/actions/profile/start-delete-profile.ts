import { Action } from 'redux'

import { START_DELETE_PROFILE } from '../../consts/actions/profile'

export interface StartDeleteProfileAction extends Action<string> {}

const startDeleteProfile = (): StartDeleteProfileAction => ({
  type: START_DELETE_PROFILE,
})

export default startDeleteProfile
