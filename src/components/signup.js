import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const buttonStyle = {
  margin: 12,
}

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  validateName() {
    if (!/[a-zA-Z_]{3,18}/.test(this.state.name)) {
      this.setState({
        nameError: 'valid character is lowercase letter, uppercase letter and "_", ' +
        'Length Should between 3 and 18',
        error: true
      });
    } else {
      this.setState({
        nameError: '',
        error: false}
      );
    }
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
        error: false
      });
    }
  }

  handleSubmit() {
    this.validateEmail();
    this.validateName();
    this.validatePassword();
    if (!this.state.error) {
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Sign Up"
          showMenuIconButton={false}
        >
          <Link to="login">
            <RaisedButton label="Log In" default={true} style={buttonStyle}/>
          </Link>
        </AppBar>
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Name"
              floatingLabelText="Name"
              type="text"
              value={this.state.name}
              errorText={this.state.nameError}
              onBlur={this.validateName.bind(this)}
              onChange={this.handleNameChange.bind(this)}
              onFocus={() => {this.setState({nameError: ''})}}
            /><br/>
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
            <div style={divCenterStyle}>
              <RaisedButton
                label="Sign Up"
                primary={true}
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
