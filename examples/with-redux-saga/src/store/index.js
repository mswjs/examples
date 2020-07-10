import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
