import React from 'react';
import './app.css';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        This is landing page
        <ul role="nav">
          <li><Link to="login">Log in</Link></li>
          <li><Link to="signup">Sign up</Link></li>
        </ul>
      </div>
    );
  }
}
