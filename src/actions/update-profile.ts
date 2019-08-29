import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UPDATE_PROFILE } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'

export interface UpdateProfileAction extends Action<string> {
  firstName: string
  lastName: string
  password: string
}

const updateProfileActionCreator = (
  firstName: string,
  lastName: string,
  password: string,
): UpdateProfileAction => ({
  firstName,
  lastName,
  password,
  type: UPDATE_PROFILE,
})

const updateProfile: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  firstName,
  lastName,
  password,
) => async dispatch => {
  dispatch(updateProfileActionCreator(firstName, lastName, password))
}

export default updateProfile
