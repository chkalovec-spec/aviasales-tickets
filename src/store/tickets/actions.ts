import { ticketsData } from 'types/api'

export enum TicketsActionTypes {
  SET_TICKETS = 'SET_TICKETS',
  LOAD_TICKETS = 'LOAD_TICKETS',
  FULL_LOAD_SUCCESS = 'FULL_LOAD_SUCCESS',
}

type setTicketsType = {
  type: TicketsActionTypes.SET_TICKETS
  payload: ticketsData[]
}

type loadTicketsType = {
  type: TicketsActionTypes.LOAD_TICKETS
}

type fullLoadingType = {
  type: TicketsActionTypes.FULL_LOAD_SUCCESS
}

export const setTickets = (tickets: ticketsData[]): setTicketsType => ({
  type: TicketsActionTypes.SET_TICKETS,
  payload: tickets,
})

export const loadTickets = (): loadTicketsType => ({
  type: TicketsActionTypes.LOAD_TICKETS,
})

export const fullLoading = (): fullLoadingType => ({
  type: TicketsActionTypes.FULL_LOAD_SUCCESS,
})

export type TicketsActions = setTicketsType | loadTicketsType | fullLoadingType
