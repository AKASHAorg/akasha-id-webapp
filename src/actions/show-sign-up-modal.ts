import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SHOW_SIGN_UP_MODAL } from '../consts/actions'
import { State } from '../states'
import requestProfile from './request-profile'
import setSignUpLink from './set-sign-up-link'

export interface ShowSignUpModalAction extends Action<string> {}

const showSignUpModalActionCreator = (): ShowSignUpModalAction => ({
  type: SHOW_SIGN_UP_MODAL,
})

const showSignUpModal: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  await dispatch(showSignUpModalActionCreator())
  await dispatch(setSignUpLink())
  await dispatch(requestProfile())
}

export default showSignUpModal
