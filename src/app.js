import React from 'react';
import './app.css';
import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button'

const buttonStyle = {
  margin: 12,
}

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar
          title="Meetie"
          showMenuIconButton={false}
        >
          <Link to="login">
            <RaisedButton label="Log in" default={true} style={buttonStyle} />
          </Link>
          <Link to="signup">
            <RaisedButton label="Sign up" primary={true} style={buttonStyle}/>
          </Link>
        </AppBar>

      </div>
    );
  }
}
