import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SIGN_UP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import signUpValidation from './sign-up-validation'

export interface SignUpAction extends Action<string> {
  valid: boolean
  userId?: string
}

const signUpActionCreator = (valid: boolean, userId?: string): SignUpAction => ({
  valid,
  userId,
  type: SIGN_UP,
})

const signUp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  dispatch(signUpValidation())

  const state = getState()

  if (state.landing.profileFormValid) {
    const id = await wallet.signup(state.landing.name, state.landing.password)

    dispatch(signUpActionCreator(true, id))
  }
}

export default signUp
