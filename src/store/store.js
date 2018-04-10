import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { data } from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const middleware = [
  thunk,
  routerMiddleware(history)
];

export const store = createStore(
  combineReducers({
    ...data,
    router: routerReducer
  }),
  applyMiddleware(...middleware)
)