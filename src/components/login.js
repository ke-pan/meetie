import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const errorMessageStyle = {
  marginTop: 15,
  marginBottom: 15,
  color: 'red',
}

const buttonStyle = {
  margin: 12,
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
    };
    this.loginErrorMessage = this.loginErrorMessage.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
      showLoginError: false
    });
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
    this.setState({
      password: event.target.value,
      showLoginError: false
    });
  }

  validatePassword() {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,18}$/.test(this.state.password)) {
      this.setState({
        passwordError: 'Should contain at least one number, ' +
        'one lowercase letter, one uppercase letter; ' +
        'Length should between 8 and 18; only letter and number legal',
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
    this.validateEmail();
    this.validatePassword();
    if (!this.state.error) {
      let index = this.props.users.findIndex((u) => {
        return (u.password === this.state.password && u.email === this.state.email);
      })
      if (index !== -1) {
        this.props.onSubmit()
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
        >
          <Link to="signup">
            <RaisedButton label="Sign Up" primary={true} style={buttonStyle}/>
          </Link>
        </AppBar>
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              type="email"
              value={this.state.email}
              errorText={this.state.emailError}
              onChange={this.handleEmailChange}
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
                onMouseDown={this.handleSubmit}
                onTouchEnd={this.handleSubmit}
              />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

