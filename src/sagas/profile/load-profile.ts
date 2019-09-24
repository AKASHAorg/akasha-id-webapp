import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setProfile from '../../actions/profile/set-profile'
import { FETCH_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { ProfileData } from '../../types/users'

function* fetchProfile() {
  try {
    const profileData: ProfileData | undefined = yield call([wallet, wallet.profile])
    yield put(setProfile(profileData))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadProfileSaga() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}

export default loadProfileSaga
