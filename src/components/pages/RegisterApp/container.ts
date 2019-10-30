import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import setAddAppModalStep from '../../../actions/apps/set-add-app-modal-step'
import showAddAppModal from '../../../actions/apps/show-add-app-modal'
import setRegisterAppLink from '../../../actions/landing/set-register-app-link'
import fetchPersonas from '../../../actions/personas/fetch-personas'
import { State } from '../../../states'
import { RegisterAppMatch } from './RegisterApp'
import RegisterAppWrapper from './RegisterAppWrapper'

const enchance = connect(
  (state: State) => {
    return {
      signedIn: state.account.signedIn,
      addAppModalStep: state.apps.addAppModalStep,
    }
  },
  (dispatch: Dispatch<Action>, props: RouteComponentProps<RegisterAppMatch>) => ({
    setRegisterAppLink: (link: string) => dispatch(setRegisterAppLink(link)),
    showAddAppModal: () => dispatch(showAddAppModal(props.match.params.apprequestlink)),
    finishSendClaim: () => dispatch(setAddAppModalStep('wait-request')),
    fetchPersonas: () => dispatch(fetchPersonas()),
  }),
)

export default withRouter(enchance(RegisterAppWrapper))
