import { render } from 'react-dom';
import React from 'react';
import App from './app';
import Login from './login';
import Signup from './signup';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
  </Router>
), document.querySelector('.container'));
