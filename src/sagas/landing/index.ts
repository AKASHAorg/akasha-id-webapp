import { spawn } from 'redux-saga/effects'

import loadPublicProfiles from './load-public-profiles'
import signIn from './sign-in'
import signUp from './sign-up'

function* landingSaga() {
  yield spawn(loadPublicProfiles)
  yield spawn(signIn)
  yield spawn(signUp)
}

export default landingSaga
