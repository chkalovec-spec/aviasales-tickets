import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectSortBy } from 'store/sorts/selectors'
import { setSortBy } from 'store/sorts/actions'

import { SORTS_LIST } from 'constants/sorts'
import { Sorts } from 'components/Sorts'

export const SortContainer: React.FC = () => {
  const sortsItems = SORTS_LIST

  const activeSortItem = useSelector(selectSortBy)
  const dispatch = useDispatch()

  const onChangeSortItem = useCallback(
    (value: string): void => {
      if (activeSortItem !== value) dispatch(setSortBy(value))
    },
    [dispatch, activeSortItem]
  )

  return (
    <>
      <Sorts {...{ sortsItems, activeSortItem, onChangeSortItem }} />
    </>
  )
}
