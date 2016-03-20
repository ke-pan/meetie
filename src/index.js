import { render } from 'react-dom';
import React from 'react';
import App from './app';
import Login from './login';
import Signup from './signup';
import EventForm from './eventForm';
import EventPage from './containers/eventPage';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import reducers from './reducers';

injectTapEventPlugin();

const store = createStore(reducers);

console.log(store.getState());

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={EventPage} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="new" component={EventForm} />
    </Router>
  </Provider>
), document.querySelector('.container'));
