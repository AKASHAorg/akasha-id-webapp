import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setProfiles from '../../actions/profiles/set-profiles'
import { FETCH_PROFILES } from '../../consts/actions/profiles'
import { wallet } from '../../did'
import { Profile } from '../../types/users'

function* fetchProfiles() {
  try {
    const profiles: Profile[] = yield call([wallet, wallet.profiles])
    yield put(setProfiles(profiles))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadProfilesSaga() {
  yield takeLatest(FETCH_PROFILES, fetchProfiles)
}

export default loadProfilesSaga
