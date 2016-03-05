import React from 'react';
import AppBar from 'material-ui/lib/app-bar'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
}

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Sign Up"
          showMenuIconButton={false}
        />
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Name"
              floatingLabelText="Name"
              type="text"
            /><br/>
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
              <RaisedButton label="Sign Up" primary={true} />
            </div>

          </form>
        </div>
      </div>
    );
  }
}
