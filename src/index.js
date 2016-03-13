import { render } from 'react-dom';
import React from 'react';
import App from './app';
import Login from './login';
import Signup from './signup';
import EventForm from './eventForm';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={EventForm} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="events" component={EventForm} />
  </Router>
), document.querySelector('.container'));
