import { SortsActions, SortsActionsTypes } from './actions'

export type SortsStateType = {
  sortBy: string
}

const initialState: SortsStateType = {
  sortBy: '',
}

export const sorts = (state = initialState, action: SortsActions): SortsStateType => {
  switch (action.type) {
    case SortsActionsTypes.SET_SORT_BY: {
      return { ...state, sortBy: action.payload }
    }
    default:
      return state
  }
}
