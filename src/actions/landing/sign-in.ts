import { Action } from 'redux'

import { SIGN_IN } from '../../consts/actions/landing'
import { Profile } from '../../types/users'

export interface SignInAction extends Action<string> {
  profile: Profile
}

const signIn = (profile: Profile): SignInAction => ({
  profile,
  type: SIGN_IN,
})

export default signIn
