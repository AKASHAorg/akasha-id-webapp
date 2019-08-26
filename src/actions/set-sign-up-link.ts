import { Action } from 'redux'
import { SET_SIGN_UP_LINK } from '../consts/actions'

export interface SetSignUpLinkAction extends Action<string> {
  link: string
}

const setSignUpLink = (link: string): SetSignUpLinkAction => ({
  link,
  type: SET_SIGN_UP_LINK,
})

export default setSignUpLink
