import { Action } from 'redux'

import { SET_REGISTER_APP_LINK } from '../../consts/actions/landing'

export interface SetRegisterAppLinkAction extends Action<string> {
  link?: string
}

const setRegisterAppLink = (link?: string): SetRegisterAppLinkAction => ({
  link,
  type: SET_REGISTER_APP_LINK,
})

export default setRegisterAppLink
