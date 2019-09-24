import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchApps from '../../../actions/apps/fetch-apps'
import setRegisterAppLink from '../../../actions/landing/set-register-app-link'
import { State } from '../../../states'
import Apps from './Apps'

const enchance = connect(
  (state: State) => ({
    apps: state.apps.apps,
  }),
  (dispatch: Dispatch<Action>) => ({
    loadApps: () => dispatch(fetchApps()),
    setRegisterAppLink: (link: string) => dispatch(setRegisterAppLink(link)),
  }),
)

export default enchance(Apps)
