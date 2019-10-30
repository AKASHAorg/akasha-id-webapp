import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import acceptApp from '../../../actions/apps/accept-app'
import declineApp from '../../../actions/apps/decline-app'
import { State } from '../../../states'
import { AddAppFormData } from '../../../types/apps'
import AddAppModal from './AddAppModal'

const enchance = connect(
  (state: State) => ({
    step: state.apps.addAppModalStep,
    name:
      state.apps.appRequest && state.apps.appRequest.appInfo
        ? state.apps.appRequest.appInfo.name
        : '',
    description:
      state.apps.appRequest && state.apps.appRequest.appInfo
        ? state.apps.appRequest.appInfo.description
        : '',
    icon:
      state.apps.appRequest && state.apps.appRequest.appInfo
        ? state.apps.appRequest.appInfo.icon
        : '',
    url:
      state.apps.appRequest && state.apps.appRequest.appInfo
        ? state.apps.appRequest.appInfo.url
        : '',
    nonce: state.apps.appRequest ? state.apps.appRequest.nonce : 0,
    attributes:
      state.apps.appRequest && state.apps.appRequest.attributes
        ? state.apps.appRequest.attributes
        : [],
  }),
  (dispatch: Dispatch<Action>) => ({
    onClose: () => dispatch(declineApp()),
    onOk: (personaId: string, formData: AddAppFormData) => dispatch(acceptApp(personaId, formData)),
  }),
)

export default enchance(AddAppModal)
