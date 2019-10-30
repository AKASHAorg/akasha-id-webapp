import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setPublicAccounts from '../../actions/landing/set-public-accounts'
import { FETCH_PUBLIC_ACCOUNTS } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Account } from '../../types/users'

function* loadPublicAccountsImplementation() {
  try {
    const accounts: Account[] = yield call([wallet, wallet.publicAccounts])
    yield put(setPublicAccounts(accounts))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* loadPublicAccountsSaga() {
  yield takeLatest(FETCH_PUBLIC_ACCOUNTS, loadPublicAccountsImplementation)
}

export default loadPublicAccountsSaga
