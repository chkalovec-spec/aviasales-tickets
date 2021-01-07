import * as _ from 'lodash'
import { Sorts } from 'components/Sorts'
import { SORTS_LIST } from 'constants/sorts'
import { useCallback, useMemo, useState } from 'react'

export const SortContainer: React.FC = () => {
  const sortsItems = SORTS_LIST
  const defaultActiveSortItem = useMemo((): string => {
    return _.head(sortsItems)!.id
  }, [sortsItems])

  const [activeSortItem, setActiveSortItem] = useState<string>(defaultActiveSortItem)

  const onChangeSortItem = useCallback((id: string): void => {
    setActiveSortItem(id)
  }, [])

  const propsForSorts = {
    sortsItems,
    activeSortItem,
    onChangeSortItem,
  }

  return (
    <>
      <Sorts {...propsForSorts} />
    </>
  )
}
