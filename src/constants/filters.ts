import { FiltersItem } from './../types/filters'
import { generate } from 'shortid'
export const FILTERS_TITLE = 'Количество пересадок'

export const FILTERS_LIST: FiltersItem[] = [
  { id: generate(), value: 'all', displayValue: 'Все' },
  { id: generate(), value: 'noTransfer', displayValue: 'Без пересадок' },
  { id: generate(), value: 'oneTransfer', displayValue: 'Одна пересадка' },
  { id: generate(), value: 'twoTransfer', displayValue: 'Две пересадки' },
  { id: generate(), value: 'threeTransfer', displayValue: 'Три пересадки' },
]
