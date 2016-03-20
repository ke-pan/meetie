import events from './events';
import users from './users';
import log from './log';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

export default combineReducers({
  events,
  users,
  log,
  routing
})
