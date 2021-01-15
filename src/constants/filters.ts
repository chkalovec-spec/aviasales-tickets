import { generate } from 'shortid'
import { FiltersItem } from './../types/filters'

export const FILTERS_TITLE = 'Максимальные пересадки'

export enum FiltersValues {
  ALL = 'all',
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
}

export const FILTERS_LIST: FiltersItem[] = [
  { id: generate(), value: FiltersValues.ALL, displayValue: 'Все' },
  { id: generate(), value: FiltersValues.ZERO, displayValue: 'Без пересадок' },
  { id: generate(), value: FiltersValues.ONE, displayValue: 'Одна пересадка' },
  { id: generate(), value: FiltersValues.TWO, displayValue: 'Две пересадки' },
  { id: generate(), value: FiltersValues.THREE, displayValue: 'Три пересадки' },
]
