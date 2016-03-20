import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { browserHistory } from 'react-router';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const errorMessageStyle = {
  marginTop: 15,
  marginBottom: 15,
  color: 'red',
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      showLoginError: false
    }
    this.loginErrorMessage.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  validateEmail() {
    if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{1,}$/.test(this.state.email)) {
      this.setState({
        emailError: 'Please input a valid email',
        error: true,
      });
    } else {
      this.setState({
        emailError: '',
        error: false,
      });
    }
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  validatePassword() {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,18}$/.test(this.state.password)) {
      this.setState({
        passwordError: 'Should contain at least one number, ' +
        'one lowercase letter, one uppercase letter. ' +
        'Length should between 8 and 18',
        error: true
      });
    } else {
      this.setState({
        passwordError: '',
        error: false}
      );
    }
  }

  handleSubmit() {
    if (!this.state.error) {
      if (localStorage.getItem('email') == this.state.email &&
        localStorage.getItem('password') == this.state.password) {
        browserHistory.push('/');
      } else {
        this.setState({showLoginError: true});
      }
    }
  }

  loginErrorMessage() {
    if (this.state.showLoginError) {
      return (
        <div style={errorMessageStyle}>
          Email or Password wrong
        </div>
      );
    } else {
      return null;
    }
  }

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
              value={this.state.email}
              errorText={this.state.emailError}
              onChange={this.handleEmailChange.bind(this)}
              onBlur={this.validateEmail.bind(this)}
              onFocus={() => {this.setState({emailError: ''})}}
            /><br/>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              errorText={this.state.passwordError}
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
              onBlur={this.validatePassword.bind(this)}
              onFocus={() => {this.setState({passwordError: ''})}}
            /><br/>
            { this.loginErrorMessage() }
            <div style={divCenterStyle}>
              <RaisedButton
                label="Log In"
                secondary={true}
                onMouseDown={this.handleSubmit.bind(this)}
                onTouchEnd={this.handleSubmit.bind(this)}
              />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

