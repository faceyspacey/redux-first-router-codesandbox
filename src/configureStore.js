 import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRoutes } from 'redux-first-router'

import routesMap, { options } from './routesMap'
import * as reducers from './reducers'
import * as actionCreators from './actions'

export default history => {
  const { 
    reducer,
    middleware,
    enhancer
  } = connectRoutes(history, routesMap, options)

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const enhancers = composeEnhancers(enhancer, middlewares)

  return createStore(rootReducer, enhancers)
}

const composeEnhancers = composeWithDevTools({ actionCreators })
