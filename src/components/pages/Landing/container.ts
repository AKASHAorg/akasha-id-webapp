import { connect } from 'react-redux'

import { State } from '../../../states'
import Landing from './Landing'

const enchance = connect((state: State) => ({
  users: state.landing.users,
}))

export default enchance(Landing)
