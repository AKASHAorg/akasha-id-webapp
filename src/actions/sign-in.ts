import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SIGN_IN } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { Profile, User } from '../types/users'
import signInValidation from './sign-in-validation'

export interface SignInAction extends Action<string> {
  valid: boolean
  user?: User
}

const signInActionCreator = (valid: boolean, user?: User): SignInAction => ({
  valid,
  user,
  type: SIGN_IN,
})

const signIn: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  dispatch(signInValidation())

  const state = getState()

  if (state.landing.profileFormValid) {
    const users: Profile[] = wallet.publicProfiles()
    const userProfile: Profile | undefined = users.find(u => u.id === state.landing.userId)
    let action

    try {
      if (userProfile !== undefined) {
        await wallet.login(userProfile.id, state.landing.password)

        const user: User = {
          username: userProfile!.name,
          password: state.landing.password,
        }
        action = signInActionCreator(true, user)
      } else {
        action = signInActionCreator(false)
      }

      dispatch(action)
    } catch (e) {
      dispatch(signInActionCreator(false))
    }
  }
}

export default signIn
