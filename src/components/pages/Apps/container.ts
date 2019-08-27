import { connect } from 'react-redux'

import { State } from '../../../states'
import Apps from './Apps'

const enchance = connect((state: State) => ({
  apps: state.apps.apps,
}))

export default enchance(Apps)
