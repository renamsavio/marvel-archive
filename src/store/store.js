import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { data } from '../reducers'

const store = createStore(
  data,
  applyMiddleware(thunk)
)

export default store;