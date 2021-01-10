import { useEffect, useState, useMemo } from 'react'
import * as _ from 'lodash'

import { useTickets } from 'hooks/useTickets'

import { MAX_COUNT_TICKETS } from 'constants/tickets'

import { Tickets } from 'components/Tickets'
import { Loader } from 'components/Loader'
import { BottomArrow } from 'components/BottomArrow'

export const TicketsContainer: React.FC = () => {
  const { tickets } = useTickets()
  const [maxCount, setMaxCount] = useState<number>(MAX_COUNT_TICKETS)

  const onscrollHandler = useMemo(
    () =>
      _.throttle(() => {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement
        if (scrollTop === scrollHeight - clientHeight) {
          maxCountHandler()
        }
      }, 300),
    []
  )

  useEffect(() => {
    document.addEventListener('scroll', onscrollHandler)
    return () => {
      document.removeEventListener('scroll', onscrollHandler)
    }
  }, [onscrollHandler])

  const maxCountHandler = () => {
    setMaxCount((prevCount: number): number => {
      return prevCount + MAX_COUNT_TICKETS
    })
  }

  return (
    <>
      {!tickets.length && <Loader />}
      <Tickets tickets={tickets.slice(0, maxCount)} />
      {maxCount <= tickets.length && <BottomArrow onClick={maxCountHandler} />}
    </>
  )
}
