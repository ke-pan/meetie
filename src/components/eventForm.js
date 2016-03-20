import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AutoComplete from 'material-ui/lib/auto-complete';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';
import AppBar from 'material-ui/lib/app-bar';
import Toggle from 'material-ui/lib/toggle';
import RaisedButton from 'material-ui/lib/raised-button';
import { browserHistory } from 'react-router';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const presetType = ['Birthday party', 'Conference talk', 'Wedding'];

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      titleError: '',
      type: '',
      typeError: '',
      host: '',
      hostError: '',
      location: '',
      locationError: '',
      guests: '',
      showMessage: false,
      message: '',
      error: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  validateTitle() {
    if (this.state.title.trim() === '') {
      this.state.error = true;
      this.titleError = 'Please input a title';
    } else {
      this.state.error = false;
      this.titleError = '';
    }
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value,
    });
  }

  validateType() {
    if (this.state.type.trim() === '') {
      this.state.error = true;
      this.typeError = 'Please input an event type';
    } else {
      this.state.error = false;
      this.typeError = '';
    }
  }

  handleHostChange(event) {
    this.setState({
      host: event.target.value,
    });
  }

  validateHost() {
    if (this.state.host.trim() === '') {
      this.state.error = true;
      this.hostError = 'Who host the event?';
    } else {
      this.state.error = false;
      this.hostError = '';
    }
  }

  handleGuestChange(event) {
    this.setState({
      guests: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  validateLocation() {
    if (this.state.location.trim() === '') {
      this.state.error = true;
      this.locationError = 'Please input a location';
    } else {
      this.state.error = false;
      this.locationError = '';
    }
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  toggleMessage(event) {
    this.setState({
      showMessage: event.target.value,
    });
  }

  optionalMessage() {
    if (this.state.showMessage) {
      return (
        <TextField
          type="text"
          multiLine={true}
          rows={6}
          rowsMax={10}
          value={this.state.message}
          onChange={this.handleMessageChange.bind(this)}
        />
      );
    }
    return null;
  }

  handleSubmit() {
    if (!this.state.error) {
      this.props.onSubmit({
          title: this.state.title,
          location: this.state.location,
          host: this.state.host,
          guests: this.state.guests,
          message: this.state.message,
          started_at: {
            date: this.refs.startAtDate.getDate().toDateString(),
            time: this.refs.startAtTime.getTime().toTimeString()
          },
          ended_at: {
            date: this.refs.endAtDate.getDate().toDateString(),
            time: this.refs.endAtTime.getTime().toTimeString()
          }
      });
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="New event"
          showMenuIconButton={false}
        />
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Title"
              floatingLabelText="Title"
              type="text"
              value={this.state.title}
              errorText={this.state.titleError}
              onBlur={this.validateTitle.bind(this)}
              onChange={this.handleTitleChange}
              onFocus={ () => {this.setState({titleError: ''});} }
            /><br />
            <AutoComplete
              hintText="Type"
              floatingLabelText="Type"
              type="text"
              value={this.state.type}
              errorText={this.state.typeError}
              dataSource={presetType}
              filter={AutoComplete.fuzzyFilter}
              onBlur={this.validateType.bind(this)}
              onChange={this.handleTypeChange.bind(this)}
              onFocus={ () => {this.setState({typeError: ''});} }
            /><br />
            <TextField
              hintText="Person or organization"
              floatingLabelText="host"
              type="text"
              value={this.state.host}
              errorText={this.state.hostError}
              onBlur={this.validateHost.bind(this)}
              onChange={this.handleHostChange.bind(this)}
              onFocus={ () => {this.setState({hostError: ''});} }
            /><br />
            <div>
              <label>Start at</label>
              <DatePicker
                ref="startAtDate"
                defaultDate={new Date()}
              />
              <TimePicker
                ref="startAtTime"
                defaultTime={new Date()}
              />
            </div>
            <div>
              <label>End at</label>
              <DatePicker
                ref="endAtDate"
                defaultDate={new Date()}
              />
              <TimePicker
                ref="endAtTime"
                defaultTime={new Date()}
              />
            </div>
            <TextField
              hintText="Guest list, separated by comma"
              floatingLabelText="Guest list"
              type="text"
              value={this.state.guests}
              onChange={this.handleGuestChange.bind(this)}
            /><br />
            <TextField
              hintText="Where will this event host?"
              floatingLabelText="Location"
              type="text"
              value={this.state.location}
              errorText={this.state.locationError}
              onBlur={this.validateLocation.bind(this)}
              onChange={this.handleLocationChange.bind(this)}
              onFocus={ () => {this.setState({locationError: ''});} }
            /><br />
            <Toggle
              onToggle={this.toggleMessage.bind(this)}
              label="Optional information"
            />
            { this.optionalMessage() }
            <br />
            <div style={divCenterStyle}>
              <RaisedButton
                label="Create Event"
                primary={true}
                onMouseDown={this.handleSubmit}
                onTouchEnd={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
