import { useEffect, useState, useMemo } from 'react'
import * as _ from 'lodash'

import { useTickets } from 'hooks/useTickets'

import { MAX_COUNT_TICKETS } from 'constants/tickets'

import { Tickets } from 'components/Tickets'
import { Loader } from 'components/Loader'
import { BottomArrow } from 'components/BottomArrow'
import { useSelector } from 'react-redux'
import { selectFilters } from 'store/filters/selectors'
import { selectSortBy } from 'store/sorts/selectors'

export const TicketsContainer: React.FC = () => {
  const { tickets } = useTickets()
  const [maxCount, setMaxCount] = useState<number>(MAX_COUNT_TICKETS)
  const [animate, setAnimate] = useState<boolean>(false)

  const filters = useSelector(selectFilters)
  const sorts = useSelector(selectSortBy)

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

  useEffect(() => {
    if (filters.length || sorts) {
      setAnimate(true)
    }
  }, [filters, sorts])

  const maxCountHandler = () => {
    setMaxCount((prevCount: number): number => {
      return prevCount + MAX_COUNT_TICKETS
    })
  }

  return (
    <>
      {!tickets.length && <Loader />}
      <Tickets tickets={tickets.slice(0, maxCount)} animate={animate} />
      {maxCount <= tickets.length && <BottomArrow onClick={maxCountHandler} />}
    </>
  )
}
