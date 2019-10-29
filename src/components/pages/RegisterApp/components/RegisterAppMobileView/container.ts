import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import acceptApp from '../../../../../actions/apps/accept-app'
import declineApp from '../../../../../actions/apps/decline-app'
import fetchProfile from '../../../../../actions/profile/fetch-profile'
import { State } from '../../../../../states'
import { AddAppFormData } from '../../../../../types/apps'
import RegisterAppMobileView from './RegisterAppMobileView'

const enchance = connect(
  (state: State) => ({
    step: state.apps.addAppModalStep,
    profiles: state.profiles.profiles,
    profile: state.profile,
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
    loadProfile: () => dispatch(fetchProfile('123')),
    onClose: () => dispatch(declineApp()),
    onOk: (formData: AddAppFormData) => dispatch(acceptApp(formData)),
  }),
)

export default enchance(RegisterAppMobileView)
