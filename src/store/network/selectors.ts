import { RootState } from './../index'
import { NetworkStateType } from './reducers'

export const selectSearchId = ({ network }: RootState): NetworkStateType['searchId'] =>
  network.searchId
