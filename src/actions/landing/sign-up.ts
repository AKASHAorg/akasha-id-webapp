import { Action } from 'redux'

import { SIGN_UP } from '../../consts/actions/landing'
import { Profile } from '../../types/users'

export interface SignUpAction extends Action<string> {
  profile: Profile
}

const signUp = (profile: Profile): SignUpAction => ({
  profile,
  type: SIGN_UP,
})

export default signUp
