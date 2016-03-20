import { render } from 'react-dom';
import React from 'react';
import App from './components/app';
import Login from './components/login';
import Signup from './components/signup';
import FormPage from './containers/formPage';
import EventPage from './containers/eventPage';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import reducers from './reducers';

injectTapEventPlugin();

const store = createStore(reducers);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

console.log(store.getState());

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={EventPage} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="new" component={FormPage} />
    </Router>
  </Provider>
), document.querySelector('.container'));
