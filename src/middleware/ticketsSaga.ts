import { takeEvery, select, call, put } from 'redux-saga/effects'

import { fetchTickets } from 'api'
import { fetchTicketsData } from 'types/api'

import { NetworkStateType } from 'store/network/reducers'
import { TicketsStateType } from 'store/tickets/reducers'

import { selectSearchId } from 'store/network/selectors'
import { selectIsFullLoading, selectTickets } from 'store/tickets/selectors'

import { fullLoading, setTickets, TicketsActionTypes } from 'store/tickets/actions'

function* getTickets() {
  const isFullLoading: TicketsStateType['isFullLoading'] = yield select(selectIsFullLoading)
  const ticketsInState: TicketsStateType['data'] = yield select(selectTickets)
  if (!isFullLoading) {
    try {
      const searchId: NetworkStateType['searchId'] = yield select(selectSearchId)
      if (!isFullLoading) {
        const { stop, tickets }: fetchTicketsData = yield call(() => fetchTickets(searchId))
        yield put(setTickets(tickets))
        if (stop || ticketsInState.length > 1000) {
          yield put(fullLoading())
        }
      }
    } catch (error) {
      yield put(setTickets([]))
    }
  }
}

export function* ticketsSaga() {
  yield takeEvery(TicketsActionTypes.LOAD_TICKETS, getTickets)
}
