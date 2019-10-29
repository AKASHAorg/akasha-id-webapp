import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import setRedirect from '../../../actions/profile/set-redirect'
import { State } from '../../../states'
import ProfileCreated from './ProfileCreated'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({
    unsetRedirect: () => dispatch(setRedirect(false)),
  }),
)

export default enchance(ProfileCreated)
