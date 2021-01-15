import React from 'react'

import { Ticket } from 'types/tickets'
import classes from './style.module.scss'

type TicketsProps = {
  tickets: Ticket[]
  animate: boolean
}

const Animate = (props: any) => {
  return (
    <>
      <div className={classes.animate}>{props.children}</div>
    </>
  )
}

export const Tickets: React.FC<TicketsProps> = ({ tickets, animate }) => {
  return (
    <>
      {tickets.map(({ id, priceText, carrierLogo, segments }) => {
        return (
          <Animate>
            <div key={id} className={animate ? classes.animateTickets : classes.tickets}>
              <>
                <div className={classes.header}>
                  <p className={classes.price}>{priceText}</p>
                  <div className={classes.logo}>
                    <img src={carrierLogo} alt='logo' />
                  </div>
                </div>
                {segments.map(
                  ({ id, origin, destination, sendDate, arrivalDate, durationText, stops }) => {
                    return (
                      <React.Fragment key={id}>
                        <div className={classes.segment}>
                          <div className={classes.info}>
                            <p className={classes.title}>{`${origin} - ${destination}`}</p>
                            <p className={classes.subTitle}>{`${sendDate} - ${arrivalDate}`}</p>
                          </div>
                          <div className={classes.info}>
                            <p className={classes.title}>В пути</p>
                            <p className={classes.subTitle}>{durationText}</p>
                          </div>
                          <div className={classes.info}>
                            <p className={classes.title}>{`Пересадки: ${stops.length}`}</p>
                            <p className={classes.subTitle}>{stops.join(',')}</p>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  }
                )}
              </>
            </div>
          </Animate>
        )
      })}
    </>
  )
}
