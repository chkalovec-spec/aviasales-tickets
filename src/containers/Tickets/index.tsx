import * as _ from 'lodash'
import { useTickets } from 'hooks/useTickets'
import { Tickets } from 'components/Tickets'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { MAX_COUNT_TICKETS } from 'constants/tickets'
import { Loader } from 'components/Loader'
import { BottomArrow } from 'components/BottomArrow'

export const TicketsContainer: React.FC = () => {
  const { tickets } = useTickets()
  const [maxCount, setMaxCount] = useState<number>(MAX_COUNT_TICKETS)

  const throttledMethod = useMemo(
    () =>
      // _.throttle(({ target: { scrollingElement: { scrollHeight, clientHeight } } }) => {
      _.throttle(e => {
        console.log(e)
        // console.log(scrollHeight)
        // console.log(clientHeight)

        // if (clientHeight <= scrollHeight + 956) {
        //   console.log('tut')
        //   maxCountHandler()
        // }
      }, 400),
    []
  )

  const onscrollHandler = useCallback(throttledMethod, [throttledMethod])

  useEffect(() => {
    document.body.addEventListener('scroll', onscrollHandler)
    return () => {
      document.body.removeEventListener('scroll', onscrollHandler)
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
