import React from 'react'
import { Ticket } from 'types/tickets'
import './style.scss'

type TicketsProps = {
  tickets: Ticket[]
}

export const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  return (
    <>
      {tickets.map(ticket => {
        return (
          <div className='ticket-wrapper' key={ticket.id}>
            <>
              <div className='ticket__header'>
                <p className='ticket__price'>{ticket.price}</p>
                <div className='ticket__logo'>
                  <img src={ticket.carrierLogo} alt='logo' />
                </div>
              </div>
              {ticket.segments.map(segment => {
                return (
                  <React.Fragment key={segment.id}>
                    <div className='segment__wrapper'>
                      <div className='segment__info'>
                        <p className='segment__info-title'>{`${segment.origin} - ${segment.destination}`}</p>
                        <p className='segment__info-subtitle'>{`${segment.sendDate} - ${segment.arrivalDate}`}</p>
                      </div>
                      <div className='segment__info'>
                        <p className='segment__info-title'>В пути</p>
                        <p className='segment__info-subtitle'>{segment.duration}</p>
                      </div>
                      <div className='segment__info'>
                        <p className='segment__info-title'>{`Пересадки: ${segment.stops.length}`}</p>
                        <p className='segment__info-subtitle'>{segment.stops.join(',')}</p>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            </>
          </div>
        )
      })}
    </>
  )
}
