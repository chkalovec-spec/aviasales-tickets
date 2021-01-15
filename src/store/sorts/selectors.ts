import { RootState } from 'store'
import { SortsStateType } from './reducers'

export const selectSortBy = ({ sorts }: RootState): SortsStateType['sortBy'] => sorts.sortBy
