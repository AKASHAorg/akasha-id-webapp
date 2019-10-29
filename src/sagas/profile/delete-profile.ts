import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setRedirect from '../../actions/profile/set-redirect'
import { StartDeleteProfileAction } from '../../actions/profile/start-delete-profile'
import { START_DELETE_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'

function* deleteProfileImplementation(action: StartDeleteProfileAction) {
  try {
    yield call([wallet, wallet.removeProfile], action.id)

    yield put(setRedirect(true))

    notify('Profile has been deleted')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* deleteProfileSaga() {
  yield takeLatest(START_DELETE_PROFILE, deleteProfileImplementation)
}

export default deleteProfileSaga
