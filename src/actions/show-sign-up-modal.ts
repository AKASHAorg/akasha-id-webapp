import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SHOW_SIGN_UP_MODAL } from '../consts/actions'
import { client, wallet } from '../did'
import { State } from '../states'
import registerApp from './register-app'
import requestProfile from './request-profile'

export interface ShowSignUpModalAction extends Action<string> {
  link: string
}

const showSignUpModalActionCreator = (link: string): ShowSignUpModalAction => ({
  link,
  type: SHOW_SIGN_UP_MODAL,
})

const showSignUpModal: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  const link = await client.registrationLink()
  const trimmedLink = link.substring('http://localhost:3000/#/link/'.length)

  dispatch(showSignUpModalActionCreator(trimmedLink))
  dispatch(requestProfile())
  dispatch(registerApp())
}

export default showSignUpModal
