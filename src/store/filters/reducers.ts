import { FiltersActions, FiltersActionsTypes } from './actions'

export type FiltersStateType = {
  filters: string[]
}

export const initialState: FiltersStateType = {
  filters: [],
}

export const filters = (state = initialState, action: FiltersActions): FiltersStateType => {
  switch (action.type) {
    case FiltersActionsTypes.ADD_FILTER: {
      return { ...state, filters: [...state.filters, action.payload] }
    }
    case FiltersActionsTypes.REMOVE_FILTER: {
      return { ...state, filters: state.filters.filter(e => e !== action.payload) }
    }
    default:
      return state
  }
}
