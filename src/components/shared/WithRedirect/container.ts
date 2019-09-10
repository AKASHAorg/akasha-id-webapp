import { connect } from 'react-redux'
import { State } from '../../../states'
import WithRedirect, { WithRedirectProps } from './WithRedirect'

const enchance = connect(
  (state: State): Pick<WithRedirectProps, 'signedIn'> => ({
    signedIn: state.profile.signedIn,
  }),
)

export default enchance(WithRedirect)
