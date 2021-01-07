import { generate } from 'shortid'
import format from 'date-fns/format'
import add from 'date-fns/add'
import { ticketsData } from './../../types/api'
import { BASE_CARRIER_LOGO_URL, BASE_CARRIER_LOGO_URL_EXT, PRICE_CURRENCY } from 'constants/tickets'
import { Ticket, Segment } from './../../types/tickets'

export const extractTicketsResp = (ticket: ticketsData): Ticket => {
  const id = generate()
  const price: string = `${ticket.price.toLocaleString()}${PRICE_CURRENCY}`
  const carrierLogo: string = `${BASE_CARRIER_LOGO_URL}/${ticket.carrier}${BASE_CARRIER_LOGO_URL_EXT}`
  const segments: Segment[] = []

  ticket.segments.map(s => {
    const id = generate()
    const origin = s.origin
    const destination = s.destination
    const sendDate = format(new Date(s.date), 'HH:mm')
    const arrivalDate = format(
      add(new Date(s.date), {
        minutes: s.duration,
      }),
      'HH:mm'
    )
    const duration = `${Math.trunc(s.duration / 60)}ч ${s.duration % 60}м`
    const stops = s.stops

    return segments.push({ id, origin, destination, sendDate, arrivalDate, duration, stops })
  })

  return {
    id,
    price,
    carrierLogo,
    segments,
  }
}
