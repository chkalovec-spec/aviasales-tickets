import React from 'react'
import { Ticket } from 'types/tickets'
import classes from './style.module.scss'

type TicketsProps = {
  tickets: Ticket[]
}

export const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  return (
    <>
      {tickets.map(ticket => {
        return (
          <div key={ticket.id} className={classes.tickets}>
            <>
              <div className={classes.header}>
                <p className={classes.price}>{ticket.price}</p>
                <div className={classes.logo}>
                  <img src={ticket.carrierLogo} alt='logo' />
                </div>
              </div>
              {ticket.segments.map(segment => {
                return (
                  <React.Fragment key={segment.id}>
                    <div className={classes.segment}>
                      <div className={classes.info}>
                        <p
                          className={classes.title}
                        >{`${segment.origin} - ${segment.destination}`}</p>
                        <p
                          className={classes.subTitle}
                        >{`${segment.sendDate} - ${segment.arrivalDate}`}</p>
                      </div>
                      <div className={classes.info}>
                        <p className={classes.title}>В пути</p>
                        <p className={classes.subTitle}>{segment.duration}</p>
                      </div>
                      <div className={classes.info}>
                        <p className={classes.title}>{`Пересадки: ${segment.stops.length}`}</p>
                        <p className={classes.subTitle}>{segment.stops.join(',')}</p>
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
