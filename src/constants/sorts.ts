import { generate } from 'shortid'
import { SortsItem } from './../types/sorts'

export enum SortsValues {
  CHEAPSET = 'cheapest',
  FASTEST = 'fastest',
}

export const SORTS_LIST: SortsItem[] = [
  { id: generate(), value: SortsValues.CHEAPSET, displayValue: 'Самый дешёвый' },
  { id: generate(), value: SortsValues.FASTEST, displayValue: 'Самый быстрый' },
]
