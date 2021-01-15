import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectSearchId } from 'store/network/selectors'
import { selectTickets } from 'store/tickets/selectors'
import { selectFilters } from 'store/filters/selectors'
import { selectSortBy } from 'store/sorts/selectors'

import { loadSearchId } from 'store/network/actions'
import { loadTickets } from 'store/tickets/actions'

import { Ticket } from 'types/tickets'
import { extractTicketsResp } from './utils'
import { SortsValues } from 'constants/sorts'
import { FiltersValues } from 'constants/filters'

type useTicketsResp = {
  tickets: Ticket[]
}

export const useTickets = (): useTicketsResp => {
  const tickets = useSelector(selectTickets)
  const searchId = useSelector(selectSearchId)
  const filters = useSelector(selectFilters)
  const sortBy = useSelector(selectSortBy)

  const dispatch = useDispatch()

  const [data, setData] = useState<Ticket[]>([])

  useEffect(() => {
    searchId ? dispatch(loadTickets()) : dispatch(loadSearchId())

    if (tickets.length) {
      setData(tickets.map(extractTicketsResp))
    }
  }, [searchId, tickets, dispatch])

  useEffect(() => {
    if (filters.includes(FiltersValues.ALL) || !filters.length) {
      setData(tickets.map(extractTicketsResp))
    } else {
      setData(
        tickets.map(extractTicketsResp).filter(t => {
          return filters.includes(String(t.maxStops))
        })
      )
    }

    switch (sortBy) {
      case SortsValues.CHEAPSET: {
        return setData(prevTickets => {
          return [...prevTickets.sort((prev, next) => prev.price - next.price)]
        })
      }
      case SortsValues.FASTEST: {
        return setData(prevTickets => {
          return [...prevTickets.sort((prev, next) => prev.minDuration - next.minDuration)]
        })
      }
      default:
        break
    }
  }, [filters, sortBy, tickets])

  return { tickets: data }
}
