import { SortsItem } from './../types/sorts'
import { generate } from 'shortid'

export const SORTS_LIST: SortsItem[] = [
  { id: generate(), value: 'cheapest', displayValue: 'Самый дешёвый' },
  { id: generate(), value: 'fastest', displayValue: 'Самый быстрый' },
]
