import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const formStyle = {

};


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Log In"
          showMenuIconButton={false}
        />
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              type="email"
            /><br/>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
            /><br/>
            <div style={divCenterStyle}>
              <RaisedButton label="Log In" secondary={true} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
