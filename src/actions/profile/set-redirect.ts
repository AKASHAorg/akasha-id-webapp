import { Action } from 'redux'

import { SET_REDIRECT } from '../../consts/actions/profile'

export interface SetRedirectAction extends Action<string> {
  redirect: boolean
}

const setRedirect = (redirect: boolean): SetRedirectAction => ({
  redirect,
  type: SET_REDIRECT,
})

export default setRedirect
