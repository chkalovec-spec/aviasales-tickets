import { all } from 'redux-saga/effects'

import { networkSaga } from './networkSaga'
import { ticketsSaga } from './ticketsSaga'

export function* rootSaga() {
  yield all([networkSaga(), ticketsSaga()])
}
