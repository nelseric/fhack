import { compose, createStore, applyMiddleware } from 'redux'

import { devTools, persistState } from 'redux-devtools';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducers'


const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),

  // Provides support for DevTools:
  devTools(),

  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))

)(createStore);


export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}