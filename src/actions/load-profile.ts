import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { LOAD_PROFILE } from '../consts/actions'
import { State } from '../states'

export interface LoadProfileAction extends Action<string> {
  firstName: string
  lastName: string
  password: string
}

const loadProfileActionCreator = (
  firstName: string,
  lastName: string,
  password: string,
): LoadProfileAction => ({
  firstName,
  lastName,
  password,
  type: LOAD_PROFILE,
})

const loadProfile: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  const firstName = localStorage.getItem('firstName') || ''
  const lastName = localStorage.getItem('lastName') || ''
  const password = localStorage.getItem('password') || ''

  dispatch(loadProfileActionCreator(firstName, lastName, password))
}

export default loadProfile
