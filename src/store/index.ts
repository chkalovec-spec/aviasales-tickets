import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import { network } from './network/reducers'
import { tickets } from './tickets/reducers'
import { sorts } from './sorts/reducers'
import { filters } from './filters/reducers'

import { rootSaga } from 'middleware/rootSaga'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({ tickets, network, sorts, filters })

const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
