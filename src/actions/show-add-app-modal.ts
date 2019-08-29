import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SHOW_ADD_APP_MODAL } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'
import registerApp from './register-app'
import requestProfile from './request-profile'
import setAddAppModalStep from './set-add-app-modal-step'

export interface ShowAddAppModalAction extends Action<string> {
  link: string
}

const showAddAppModalActionCreator = (link: string): ShowAddAppModalAction => ({
  link,
  type: SHOW_ADD_APP_MODAL,
})

const showAddAppModal: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  dispatch(setAddAppModalStep('generate-link'))

  const link = await client.registrationLink()
  const trimmedLink = link.substring('http://localhost:3000/#/link/'.length)

  dispatch(showAddAppModalActionCreator(trimmedLink))
  dispatch(requestProfile())
  dispatch(registerApp())
}

export default showAddAppModal
