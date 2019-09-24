import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Action, Dispatch } from 'redux'

import setAddAppModalStep from '../../../actions/apps/set-add-app-modal-step'
import showAddAppModal from '../../../actions/apps/show-add-app-modal'
import { State } from '../../../states'
import RegisterApp, { RegisterAppMatch } from './RegisterApp'

const enchance = connect(
  (state: State) => {
    return {
      addAppModalStep: state.apps.addAppModalStep,
    }
  },
  (dispatch: Dispatch<Action>, props: RouteComponentProps<RegisterAppMatch>) => ({
    onMount: () => dispatch(showAddAppModal(props.match.params.apprequestlink)),
    onUnmount: () => dispatch(setAddAppModalStep('wait-request')),
  }),
)

export default withRouter(enchance(RegisterApp))
