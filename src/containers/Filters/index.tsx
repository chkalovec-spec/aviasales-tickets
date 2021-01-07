import { Filters } from 'components/Filters'
import { FILTERS_LIST, FILTERS_TITLE } from 'constants/filters'
import { useCallback, useState } from 'react'

export const FiltersContainer: React.FC = () => {
  const title = FILTERS_TITLE
  const filters = FILTERS_LIST

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const onChangeFilter = useCallback(
    (id: string) => {
      if (!activeFilters.includes(id)) {
        setActiveFilters(prevFilters => {
          return [...prevFilters, id]
        })
      } else {
        setActiveFilters(activeFilters.filter(fId => fId !== id))
      }
    },
    [activeFilters]
  )

  const propsForFilters = { title, filters, activeFilters, onChangeFilter }

  return (
    <>
      <Filters {...propsForFilters} />
    </>
  )
}
