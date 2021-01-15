import { RootState } from 'store'
import { TicketsStateType } from './reducers'

export const selectTickets = ({ tickets }: RootState): TicketsStateType['data'] => tickets.data
export const selectIsFullLoading = ({ tickets }: RootState): TicketsStateType['isFullLoading'] =>
  tickets.isFullLoading
