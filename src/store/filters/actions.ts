export enum FiltersActionsTypes {
  ADD_FILTER = 'ADD_FILTER',
  REMOVE_FILTER = 'REMOVE_FILTER',
}

type addFilterType = {
  type: FiltersActionsTypes.ADD_FILTER
  payload: string
}

type removeFilterType = {
  type: FiltersActionsTypes.REMOVE_FILTER
  payload: string
}

export const addFilter = (payload: string): addFilterType => ({
  type: FiltersActionsTypes.ADD_FILTER,
  payload,
})

export const removeFilter = (payload: string): removeFilterType => ({
  type: FiltersActionsTypes.REMOVE_FILTER,
  payload,
})

export type FiltersActions = addFilterType | removeFilterType
