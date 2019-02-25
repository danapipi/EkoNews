import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules'
import rootSaga from './saga'
import { navigationMiddleware } from '../views'

const sagaMiddleware = createSagaMiddleware()

const middleware = [navigationMiddleware, sagaMiddleware].filter(x => !!x)

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
)

sagaMiddleware.run(rootSaga)
