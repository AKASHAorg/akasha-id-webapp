import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SET_SIGN_UP_LINK } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'

export interface SetSignUpLinkAction extends Action<string> {
  link: string
}

const setSignUpLinkActionCreator = (link: string): SetSignUpLinkAction => ({
  link,
  type: SET_SIGN_UP_LINK,
})

const setSignUpLink: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  const link = await client.registrationLink()
  dispatch(setSignUpLinkActionCreator(link))
}

export default setSignUpLink
