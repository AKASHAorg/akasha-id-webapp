import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FetchProfileAction } from '../../actions/profile/fetch-profile'
import setProfile from '../../actions/profile/set-profile'
import { FETCH_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { Profile } from '../../types/users'

function* fetchProfile(action: FetchProfileAction) {
  try {
    const profile: Profile | undefined = yield call([wallet, wallet.profile], action.id)

    yield put(setProfile(profile))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadProfileSaga() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}

export default loadProfileSaga
