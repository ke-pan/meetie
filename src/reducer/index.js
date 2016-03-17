import events from './events';
import users from './users';
import log from './log';
import { combineReducers } from 'redux';

export default combineReducers({
  events,
  users,
  log,
})
