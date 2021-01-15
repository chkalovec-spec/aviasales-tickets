import { RootState } from 'store'
import { FiltersStateType } from './reducers'

export const selectFilters = ({ filters }: RootState): FiltersStateType['filters'] =>
  filters.filters
