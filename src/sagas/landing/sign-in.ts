import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import signInActionCreator from '../../actions/landing/sign-in'
import { StartSignInAction } from '../../actions/landing/start-sign-in'
import { START_SIGN_IN } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Profile } from '../../types/users'

function* signInImplementation(action: StartSignInAction) {
  try {
    const publicProfiles: Profile[] = yield wallet.publicProfiles()
    const profile: Profile | undefined = publicProfiles.find(u => u.id === action.userId)

    if (profile !== undefined) {
      yield call([wallet, wallet.login], profile.id, action.formData.password)
      yield put(signInActionCreator(profile))
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* signInSaga() {
  yield takeLatest(START_SIGN_IN, signInImplementation)
}

export default signInSaga
