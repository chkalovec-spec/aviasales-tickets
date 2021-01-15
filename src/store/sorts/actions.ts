export enum SortsActionsTypes {
  SET_SORT_BY = 'SET_SORT_BY',
}

type SetSortType = {
  type: SortsActionsTypes.SET_SORT_BY
  payload: string
}

export const setSortBy = (payload: string): SetSortType => ({
  type: SortsActionsTypes.SET_SORT_BY,
  payload,
})

export type SortsActions = SetSortType
