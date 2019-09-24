import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import setAddAppModalStep from '../../../actions/apps/set-add-app-modal-step'
import showAddAppModal from '../../../actions/apps/show-add-app-modal'
import setRegisterAppLink from '../../../actions/landing/set-register-app-link'
import { State } from '../../../states'
import { RegisterAppMatch } from './RegisterApp'
import RegisterAppWrapper from './RegisterAppWrapper'

const enchance = connect(
  (state: State) => {
    return {
      signedIn: state.profile.signedIn,
      addAppModalStep: state.apps.addAppModalStep,
    }
  },
  (dispatch: Dispatch<Action>, props: RouteComponentProps<RegisterAppMatch>) => ({
    handleSetRegisterAppLink: (link: string) => dispatch(setRegisterAppLink(link)),
    handleShowAddAppModal: () => dispatch(showAddAppModal(props.match.params.apprequestlink)),
    handleFinishSendClaim: () => dispatch(setAddAppModalStep('wait-request')),
  }),
)

export default withRouter(enchance(RegisterAppWrapper))
