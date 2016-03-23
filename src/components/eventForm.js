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

const dataSource = ['Birthday Party', 'Wedding', 'Conference'];

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
      timeError: false,
      guests: '',
      showMessage: false,
      message: '',
      error: true,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.validateTitle = this.validateTitle.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateTime = this.validateTime.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  validateTitle() {
    if (this.state.title.trim() === '') {
      this.setState({
        error: true,
        titleError: 'Please input a title',
      });
    } else {
      this.setState({
        error: false,
        titleError: '',
      });
    }
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value,
    });
  }

  validateType() {
    if (this.state.type.trim() === '') {
      this.setState({
        error: true,
        typeError: 'Please input an event type',
      });
    } else {
      this.setState({
        error: false,
        typeError: '',
      });
    }
  }

  handleHostChange(event) {
    this.setState({
      host: event.target.value,
    });
  }

  validateHost() {
    if (this.state.host.trim() === '') {
      this.setState({
        error: true,
        hostError: 'Who host the event?'
      });
    } else {
      this.setState({
        error: false,
        hostError: '',
      });
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
      this.setState({
        error: true,
        locationError: 'Please input a location',
      });
    } else {
      this.setState({
        error: false,
        locationError: '',
      });
    }
  }

  validateTime() {
    let startedAt = new Date(this.refs.startAtDate.getDate().toDateString() + ' ' +
      this.refs.startAtTime.getTime().toTimeString()).getTime()
    let endedAt = new Date(this.refs.endAtDate.getDate().toDateString() + ' ' +
      this.refs.endAtTime.getTime().toTimeString()).getTime()

    if (startedAt >= endedAt) {
      this.setState({
        error: true,
        timeError: true
      });
    } else {
      this.setState({
        error: false,
        timeError: false
      });
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
    this.validateTitle();
    this.validateType();
    this.validateHost();
    this.validateLocation();
    this.validateTime();
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
        >
          <Link to="/">
            <RaisedButton label="Events" default={true} style={buttonStyle}/>
          </Link>
        </AppBar>
        <div style={divCenterStyle}>
          <form>
            <TextField
              hintText="Title"
              floatingLabelText="Title"
              type="text"
              value={this.state.title}
              errorText={this.state.titleError}
              onBlur={this.validateTitle}
              onChange={this.handleTitleChange}
              onFocus={ () => {this.setState({titleError: ''});} }
            /><br />
            <AutoComplete
              hintText="Type"
              floatingLabelText="Type"
              type="text"
              value={this.state.type}
              errorText={this.state.typeError}
              filter={AutoComplete.noFilter}
              dataSource={dataSource}
              onChange={this.handleTypeChange}
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
            { this.state.timeError ?
              <div style={errorMessageStyle}>
                Start time should be earlier than end time
              </div> : null }
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
