import { Action } from 'redux'

import { DELETE_PROFILE } from '../../consts/actions/profile'

export interface DeleteProfileAction extends Action<string> {}

const deleteProfile = (): DeleteProfileAction => ({
  type: DELETE_PROFILE,
})

export default deleteProfile
