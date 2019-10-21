import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import fetchProfile from '../../../actions/profile/fetch-profile'
import { State } from '../../../states'
import EditProfile from './AddProfile'

const enchance = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({}),
)

export default enchance(EditProfile)
