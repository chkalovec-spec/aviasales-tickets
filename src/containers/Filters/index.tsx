import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectFilters } from 'store/filters/selectors'
import { addFilter, removeFilter } from 'store/filters/actions'

import { FILTERS_LIST, FILTERS_TITLE } from 'constants/filters'
import { Filters } from 'components/Filters'

export const FiltersContainer: React.FC = () => {
  const title = FILTERS_TITLE
  const filters = FILTERS_LIST

  const activeFilters = useSelector(selectFilters)
  const dispatch = useDispatch()

  const onChangeFilter = useCallback(
    (value: string) => {
      activeFilters.includes(value) ? dispatch(removeFilter(value)) : dispatch(addFilter(value))
    },
    [activeFilters, dispatch]
  )

  return (
    <>
      <Filters {...{ title, filters, activeFilters, onChangeFilter }} />
    </>
  )
}
