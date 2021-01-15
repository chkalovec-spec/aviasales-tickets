import * as _ from 'lodash'
import { generate } from 'shortid'
import format from 'date-fns/format'
import add from 'date-fns/add'

import { BASE_CARRIER_LOGO_URL, BASE_CARRIER_LOGO_URL_EXT, PRICE_CURRENCY } from 'constants/tickets'
import { ticketsData } from 'types/api'
import { Ticket } from 'types/tickets'

export const extractTicketsResp = ({ price, carrier, segments }: ticketsData): Ticket => {
  return {
    id: generate(),
    price,
    priceText: `${price.toLocaleString()}${PRICE_CURRENCY}`,
    carrierLogo: `${BASE_CARRIER_LOGO_URL}/${carrier}${BASE_CARRIER_LOGO_URL_EXT}`,
    segments: segments.map(s => {
      return {
        id: generate(),
        origin: s.origin,
        destination: s.destination,
        sendDate: format(new Date(s.date), 'HH:mm'),
        arrivalDate: format(
          add(new Date(s.date), {
            minutes: s.duration,
          }),
          'HH:mm'
        ),
        duration: s.duration,
        durationText: `${Math.trunc(s.duration / 60)}ч ${s.duration % 60}м`,
        stops: s.stops,
      }
    }),
    maxStops: Math.max(_.sum(segments.map(s => s.stops.length))),
    minDuration: Math.min(_.sum(segments.map(s => s.duration))),
  }
}
