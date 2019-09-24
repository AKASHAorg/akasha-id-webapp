import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setPublicProfiles from '../../actions/landing/set-public-profiles'
import { FETCH_PUBLIC_PROFILES } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Profile } from '../../types/users'

function* loadPublicProfilesImplementation() {
  try {
    const profiles: Profile[] = yield call([wallet, wallet.publicProfiles])
    yield put(setPublicProfiles(profiles))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadPublicProfilesSaga() {
  yield takeLatest(FETCH_PUBLIC_PROFILES, loadPublicProfilesImplementation)
}

export default loadPublicProfilesSaga
