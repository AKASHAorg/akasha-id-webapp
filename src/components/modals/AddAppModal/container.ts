import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import addApp from '../../../actions/add-app'
import changeShareFirstName from '../../../actions/change-share-first-name'
import changeShareLastName from '../../../actions/change-share-last-name'
import hideAddAppModal from '../../../actions/hide-add-app-modal'
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
    shareFirstName: state.apps.shareFirstName,
    shareLastName: state.apps.shareLastName,
  }),
  (dispatch: ThunkDispatch<State, void, Action>) => ({
    onClose: () => dispatch(hideAddAppModal()),
    onOk: () => dispatch(addApp()),
    onChangeShareFirstName: (value: boolean) => dispatch(changeShareFirstName(value)),
    onChangeShareLastName: (value: boolean) => dispatch(changeShareLastName(value)),
  }),
)

export default enchance(AddAppModal)
