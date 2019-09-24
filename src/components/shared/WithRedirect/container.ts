import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import setRegisterAppLink from '../../../actions/landing/set-register-app-link'
import { State } from '../../../states'
import WithRedirect, { WithRedirectProps } from './WithRedirect'

const enchance = connect(
  (state: State): Pick<WithRedirectProps, 'signedIn' | 'registerAppLink'> => ({
    signedIn: state.profile.signedIn,
    registerAppLink: state.landing.registerAppLink,
  }),
  (dispatch: Dispatch) => ({
    unsetRegisterAppLink: () => dispatch(setRegisterAppLink()),
  }),
)

export default enchance(WithRedirect)
