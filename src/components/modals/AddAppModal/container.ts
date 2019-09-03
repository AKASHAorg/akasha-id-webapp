import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import acceptApp from '../../../actions/accept-app'
import declineApp from '../../../actions/decline-app'
import { State } from '../../../states'
import AddAppModal from './AddAppModal'

const enchance = connect(
  (state: State) => ({
    isOpen: state.apps.showAddAppModal,
    step: state.apps.addAppStep,
    name: state.apps.appRequest ? state.apps.appRequest.appInfo.name : '',
    description: state.apps.appRequest ? state.apps.appRequest.appInfo.description : '',
    icon: state.apps.appRequest ? state.apps.appRequest.appInfo.icon : '',
    url: state.apps.appRequest ? state.apps.appRequest.appInfo.url : '',
    channel: state.apps.appRequest ? state.apps.appRequest.channel : '',
    appKey: state.apps.appRequest ? state.apps.appRequest.key : '',
    nonce: state.apps.appRequest ? state.apps.appRequest.nonce : 0,
    token: state.apps.appRequest ? state.apps.appRequest.token : '',
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(declineApp()),
    onOk: (shareUsername: boolean) => dispatch(acceptApp(shareUsername)),
  }),
)

export default enchance(AddAppModal)
