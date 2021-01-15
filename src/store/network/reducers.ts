import { NetworkActions, NetworkActionsTypes } from './actions'

export type NetworkStateType = {
  searchId: string
}

const initialState: NetworkStateType = {
  searchId: '',
}

export const network = (state = initialState, action: NetworkActions): NetworkStateType => {
  switch (action.type) {
    case NetworkActionsTypes.SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      }
    default:
      return state
  }
}
