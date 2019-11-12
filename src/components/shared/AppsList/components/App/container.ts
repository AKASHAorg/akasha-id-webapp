import { connect } from 'react-redux'

import { State } from '../../../../../states'
import App from './App'

const enchance = connect((state: State) => ({}))

export default enchance(App)
