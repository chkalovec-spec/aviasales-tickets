export enum NetworkActionsTypes {
  LOAD_SEARCH_ID = 'LOAD_SEARCH_ID',
  SET_SEARCH_ID = 'SET_SEARCH_ID',
}

type LoadSearchIdType = {
  type: NetworkActionsTypes.LOAD_SEARCH_ID
}

type SetSearchIdType = {
  type: NetworkActionsTypes.SET_SEARCH_ID
  payload: string
}

export const loadSearchId = (): LoadSearchIdType => ({
  type: NetworkActionsTypes.LOAD_SEARCH_ID,
})

export const setSearchId = (payload: string): SetSearchIdType => ({
  type: NetworkActionsTypes.SET_SEARCH_ID,
  payload,
})

export type NetworkActions = SetSearchIdType | LoadSearchIdType
