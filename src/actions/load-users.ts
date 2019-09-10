import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { LOAD_USERS } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { Profile } from '../types/users'

export interface LoadUsersAction extends Action<string> {
  users: Profile[]
}

const loadUsersActionCreator = (users: Profile[]): LoadUsersAction => ({
  users,
  type: LOAD_USERS,
})

const loadUsers: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = () => async (
  dispatch,
  getState,
) => {
  try {
    const users: Profile[] = wallet.publicProfiles()

    dispatch(loadUsersActionCreator(users))
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default loadUsers
