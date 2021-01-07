import { fetchSearchId, fetchTickets } from 'api'
import { useState, useEffect } from 'react'
import { Ticket } from './../../types/tickets'
import { extractTicketsResp } from './utils'

type useTicketsResp = {
  tickets: Ticket[]
}

export const useTickets = (): useTicketsResp => {
  const [searchId, setSearchId] = useState('')
  const [isFullLoading, setIsFullLoading] = useState<boolean>(false)
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    const getSearchId = async () => {
      const { searchId } = await fetchSearchId()
      return setSearchId(searchId)
    }
    getSearchId()
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { stop, tickets } = await fetchTickets(searchId)
        if (stop) setIsFullLoading(true)
        setTickets(prevTickets => {
          const newTickets = tickets.map(extractTicketsResp)
          return [...prevTickets, ...newTickets]
        })
      } catch (e) {
        getUsers()
      }
    }

    if (!isFullLoading && searchId) {
      getUsers()
    }
  }, [isFullLoading, tickets, searchId])
  return { tickets }
}
