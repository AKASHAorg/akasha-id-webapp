import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UPDATE_PROFILE } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'

export interface UpdateProfileAction extends Action<string> {
  login: string
  firstName: string
  lastName: string
  password: string
}

const updateProfileActionCreator = (
  login: string,
  firstName: string,
  lastName: string,
  password: string,
): UpdateProfileAction => ({
  login,
  firstName,
  lastName,
  password,
  type: UPDATE_PROFILE,
})

const updateProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  login,
  firstName,
  lastName,
  password,
) => async dispatch => {
  const response = await client.requestProfile()
  dispatch(updateProfileActionCreator(login, firstName, lastName, password))
}

export default updateProfile
