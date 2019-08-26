import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SHOW_SIGN_UP_MODAL } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'
import refreshProfile from './refresh-profile'
import setSignUpLink from './set-sign-up-link'

export interface ShowSignUpModalAction extends Action<string> {}

const showSignUpModalActionCreator = (): ShowSignUpModalAction => ({
  type: SHOW_SIGN_UP_MODAL,
})

const showSignUpModal: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  dispatch(showSignUpModalActionCreator())

  const link = await client.registrationLink()
  dispatch(setSignUpLink(link))

  const response = await client.requestProfile()
  dispatch(refreshProfile(response))
}

export default showSignUpModal
