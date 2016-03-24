import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AutoComplete from 'material-ui/lib/auto-complete';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';
import AppBar from 'material-ui/lib/app-bar';
import Toggle from 'material-ui/lib/toggle';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  margin: 12,
};

const errorMessageStyle = {
  marginTop: 15,
  marginBottom: 15,
  color: 'red',
};

const pickerStyle = {
  display: "inline-block",
  marginLeft: 10,
  maxWidth: 125,
}

const dataSource = ['Birthday Party', 'Wedding', 'Conference'];
const titleErrorText = "Please input a title";
const typeErrorText = "Please input a type";
const hostErrorText = 'Who host the event?';
const locationErrorText = 'Please input a location';


export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    let defaultDate = new Date();
    this.state = {
      title: '',
      titleError: true,
      showTitleError: false,
      type: '',
      typeError: true,
      showTypeError: false,
      host: '',
      hostError: true,
      showHostError: false,
      location: '',
      locationError: true,
      showLocationError: false,
      startedAtDate: defaultDate.toDateString(),
      startedAtTime: defaultDate.toTimeString(),
      endedAtDate: defaultDate.toDateString(),
      endedAtTime: defaultDate.toTimeString(),
      timeError: true,
      showTimeError: false,
      guests: '',
      showMessage: false,
      message: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleHostChange = this.handleHostChange.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleStartedAtDateChange = this.handleStartedAtDateChange.bind(this);
    this.handleStartedAtTimeChange = this.handleStartedAtTimeChange.bind(this);
    this.handleEndedAtDateChange = this.handleEndedAtDateChange.bind(this);
    this.handleEndedAtTimeChange = this.handleEndedAtTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
  }

  handleTitleChange(event) {
    let title = event.target.value;
    let titleError = false;
    if (title.trim() === '') {
      titleError = true;
    }
    this.setState({
      title,
      titleError,
    });
  }

  handleTypeChange(type) {
    let typeError = false;
    if (type.trim() === '') {
      typeError = true;
    }
    this.setState({
      type,
      typeError,
      showTypeError: true,
    });
  }

  handleHostChange(event) {
    let host = event.target.value;
    let hostError = false;
    if (host.trim() === '') {
      hostError = true;
    }
    this.setState({
      host,
      hostError,
    });
  }

  handleGuestChange(event) {
    this.setState({
      guests: event.target.value,
    });
  }

  handleLocationChange(event) {
    let location = event.target.value;
    let locationError = false;
    if (location.trim() === '') {
      locationError = true;
    }
    this.setState({
      location,
      locationError,
    });
  }

  startedAt(date = this.state.startedAtDate, time = this.state.startedAtTime) {
    console.log(date);
    console.log(time);
    return new Date(date + ' ' + time).getTime();
  }

  endedAt(date = this.state.endedAtDate, time = this.state.endedAtTime) {
    return new Date(date + ' ' + time).getTime();
  }

  handleStartedAtDateChange(event, date) {
    let startedAtDate = date.toDateString();
    let startedAt = this.startedAt(startedAtDate);
    let timeError = startedAt >= this.endedAt();
    console.log(startedAt);
    console.log(timeError);
    this.setState({
      startedAtDate,
      timeError,
      showTimeError: true,
    })
  }

  handleStartedAtTimeChange(event, time) {
    let startedAtTime = time.toTimeString();
    let startedAt = this.startedAt(undefined, startedAtTime);
    let timeError = startedAt >= this.endedAt();
    this.setState({
      startedAtTime,
      timeError,
      showTimeError: true,
    })
  }

  handleEndedAtDateChange(event, date) {
    let endedAtDate = date.toDateString();
    let endedAt = this.endedAt(endedAtDate);
    let timeError = this.startedAt() >= endedAt;
    this.setState({
      endedAtDate,
      timeError,
      showTimeError: true,
    })
  }

  handleEndedAtTimeChange(event, time) {
    let endedAtTime = time.toTimeString();
    let endedAt = this.endedAt(undefined, endedAtTime);
    let timeError = this.startedAt() >= endedAt;
    this.setState({
      endedAtTime,
      timeError,
      showHostError: true,
    })
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  toggleMessage(event, checked) {
    this.setState({
      showMessage: checked
    });
  }

  optionalMessage() {
    if (this.state.showMessage) {
      return (
        <TextField
          hintText="What else do you want to say?"
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
    if (!(this.state.titleError || this.state.hostError ||
      this.state.typeError || this.state.locationError || this.state.timeError)) {
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
        >
          <Link to="/">
            <RaisedButton label="Events" default={true} style={buttonStyle}/>
          </Link>
        </AppBar>
        <div style={divCenterStyle}>
          <form>
            <TextField
              autoFocus
              hintText="Title"
              floatingLabelText="Title"
              type="text"
              value={this.state.title}
              errorText={this.state.titleError && this.state.showTitleError ? titleErrorText : ''}
              onBlur={() => {this.setState({showTitleError: true})}}
              onChange={this.handleTitleChange}
            /><br />
            <AutoComplete
              ref="type"
              hintText="Type"
              floatingLabelText="Type"
              type="text"
              errorText={this.state.typeError && this.state.showTypeError ? typeErrorText : ''}
              filter={AutoComplete.noFilter}
              dataSource={dataSource}
              onUpdateInput={this.handleTypeChange}
            /><br />
            <TextField
              hintText="Person or organization"
              floatingLabelText="Host"
              type="text"
              value={this.state.host}
              errorText={this.state.hostError && this.state.showHostError ? hostErrorText : ''}
              onBlur={() => {this.setState({showHostError: true})}}
              onChange={this.handleHostChange}
            /><br />
            <div >
              <label>Start at</label>
              <DatePicker
                style={pickerStyle}
                textFieldStyle={{width: 90}}
                onChange={this.handleStartedAtDateChange}
                defaultDate={new Date()}
              />
              <TimePicker
                style={pickerStyle}
                textFieldStyle={{maxWidth: 90}}
                ref="startedAtTime"
                onChange={this.handleStartedAtTimeChange}
                defaultTime={new Date()}
              />
            </div>
            <div>
              <label>End at </label>
              <DatePicker
                style={pickerStyle}
                textFieldStyle={{maxWidth: 90}}
                onChange={this.handleEndedAtDateChange}
                defaultDate={new Date()}
              />
              <TimePicker
                style={pickerStyle}
                textFieldStyle={{maxWidth: 90}}
                ref="endedAtTime"
                onChange={this.handleEndedAtTimeChange}
                defaultTime={new Date()}
              />
            </div>
            { this.state.timeError && this.state.showTimeError ?
              <div style={errorMessageStyle}>
                Start time should be earlier than end time
              </div> : null }
            <TextField
              hintText="Guest list, separated by comma"
              floatingLabelText="Guest list"
              type="text"
              value={this.state.guests}
              onChange={this.handleGuestChange}
            /><br />
            <TextField
              hintText="Where will this event host?"
              floatingLabelText="Location"
              type="text"
              value={this.state.location}
              errorText={this.state.locationError && this.state.showLocationError ? locationErrorText : ''}
              onBlur={() => {this.setState({showLocationError: true})}}
              onChange={this.handleLocationChange}
            /><br />
            <Toggle
              onToggle={this.toggleMessage}
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
