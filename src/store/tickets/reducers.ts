import { TicketsActionTypes, TicketsActions } from './actions'
import { ticketsData } from 'types/api'

export type TicketsStateType = {
  data: ticketsData[]
  isFullLoading: boolean
}

const initialState: TicketsStateType = {
  data: [],
  isFullLoading: false,
}

export const tickets = (state = initialState, action: TicketsActions): TicketsStateType => {
  switch (action.type) {
    case TicketsActionTypes.SET_TICKETS: {
      return { ...state, data: [...state.data, ...action.payload] }
    }
    case TicketsActionTypes.FULL_LOAD_SUCCESS: {
      return { ...state, isFullLoading: true }
    }
    default:
      return state
  }
}
