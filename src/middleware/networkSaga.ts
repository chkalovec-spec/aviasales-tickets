import { takeEvery, put, call, select } from 'redux-saga/effects'

import { fetchSearchId } from 'api'
import { fetchSearchIdData } from 'types/api'

import { NetworkStateType } from 'store/network/reducers'
import { selectSearchId } from './../store/network/selectors'
import { NetworkActionsTypes, setSearchId } from 'store/network/actions'

function* getSearchId() {
  try {
    const searchId: NetworkStateType['searchId'] = yield select(selectSearchId)
    if (!searchId) {
      const { searchId }: fetchSearchIdData = yield call(fetchSearchId)
      yield put(setSearchId(searchId))
    }
  } catch (error) {}
}

export function* networkSaga() {
  yield takeEvery(NetworkActionsTypes.LOAD_SEARCH_ID, getSearchId)
}
