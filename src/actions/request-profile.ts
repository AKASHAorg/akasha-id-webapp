import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { REQUEST_PROFILE } from '../consts/actions'
import { client } from '../did'
import { State } from '../states'

export interface RequestProfileAction extends Action<string> {
  data: {
    allowed: boolean
    claim?: {
      issuer: string
      credentialSubject: {
        id: string
        login: string
      }
    }
    token?: string
    refreshEncKey?: string
  }
}

const requestProfileActionCreator = (data: any): RequestProfileAction => ({
  data,
  type: REQUEST_PROFILE,
})

const requestProfile: ActionCreator<
  ThunkAction<Promise<any>, State, void, Action>
> = () => async dispatch => {
  const response = await client.requestProfile()
  dispatch(requestProfileActionCreator(response))
}

export default requestProfile
