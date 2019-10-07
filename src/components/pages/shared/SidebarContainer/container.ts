import { connect } from 'react-redux'

import { State } from '../../../../states'
import SidebarContainer from './SidebarContainer'

const enchance = connect((state: State) => ({
  name: state.account.name,
}))

export default enchance(SidebarContainer)
