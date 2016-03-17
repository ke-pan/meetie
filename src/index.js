import { render } from 'react-dom';
import React from 'react';
import App from './app';
import Login from './login';
import Signup from './signup';
import EventForm from './eventForm';
import EventList from './eventList';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

[]

render((
  <Router history={browserHistory}>
    <Route path="/" component={EventList} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="new" component={EventForm} />
  </Router>
), document.querySelector('.container'));
œ
