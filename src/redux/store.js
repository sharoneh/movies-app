import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import MoviesReducer from './MoviesReducer'

const store = createStore(
  MoviesReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store