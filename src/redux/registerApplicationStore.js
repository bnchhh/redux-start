import {createStore} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import {applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

export default function setupStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}