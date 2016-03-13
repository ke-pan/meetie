import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AutoComplete from 'material-ui/lib/auto-complete';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

const divCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const presetType = ['birthday party', 'conference talk', 'wedding'];

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
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  validateTitle() {
    if (this.state.title.trim() == '') {
      this.state.error = true;
      this.titleError = 'Please input a title';
    } else {
      this.state.error = false;
      this.titleError = '';
    }
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  validateType() {
    if (this.state.type.trim() == '') {
      this.state.error = true;
      this.typeError = 'Please input an event type';
    } else {
      this.state.error = false;
      this.typeError = '';
    }
  }

  handleHostChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  validateHost() {
    if (this.state.host.trim() == '') {
      this.state.error = true;
      this.hostError = 'Who host the event?';
    } else {
      this.state.error = false;
      this.hostError = '';
    }
  }

  handleGuestChange(event) {
    this.setState({
      guests: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  validateLocation() {
    if (this.state.location.trim() == '') {
      this.state.error = true;
      this.locationError = 'Please input a location';
    } else {
      this.state.error = false;
      this.locationError = '';
    }
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  toggleMessage(event) {
    this.setState({
      showMessage: event.target.value
    });
  }

  message() {
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
      )
    } else {
      return null;
    }
  }

  handleSubmit() {
    if (!this.state.error) {
      browserHistory.push('/');

    }
  }

  render() {
    return (
      <div style={divCenterStyle}>
        <form>
          <TextField
            hintText="Title"
            floatingLabelText="Title"
            type="text"
            value={this.state.title}
            errorText={this.state.titleError}
            onBlur={this.validateTitle.bind(this)}
            onChange={this.handleTitleChange.bind(this)}
            onFocus={() => {this.setState({titleError: ''})}}
          /><br/>
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
            onFocus={() => {this.setState({typeError: ''})}}
          /><br/>
          <TextField
            hintText="Host"
            floatingLabelText="host person name or organization name"
            type="text"
            value={this.state.host}
            errorText={this.state.hostError}
            onBlur={this.validateHost.bind(this)}
            onChange={this.handleHostChange.bind(this)}
            onFocus={() => {this.setState({hostError: ''})}}
          /><br/>
          <label>Start at</label>
          <DatePicker
            ref="startAtDate"
            defaultDate={Date.now()}
          />
          <TimePicker
            ref="startAtTime"
            defaultTime={Date.now()}
          /><br/>
          <label>End at</label>
          <DatePicker
            ref="endAtDate"
            defaultDate={Date.now()}
          />
          <TimePicker
            ref="endAtTime"
            defaultTime={Date.now()}
          /><br/>
          <TextField
            hintText="Guest list"
            floatingLabelText="guest list, separated by comma"
            type="text"
            value={this.state.guests}
            onChange={this.handleGuestChange.bind(this)}
          /><br/>
          <TextField
            hintText="Location"
            floatingLabelText="where will this event host?"
            type="text"
            value={this.state.location}
            errorText={this.state.locationError}
            onBlur={this.validateLocation.bind(this)}
            onChange={this.handleLocationChange.bind(this)}
            onFocus={() => {this.setState({locationError: ''})}}
          /><br/>
          <Toggle
            onToggle={this.toggleMessage.bind(this)}
            label="Optional information"
          />
          { message() }
          <br/>
          <div style={divCenterStyle}>
            <RaisedButton
              label="Create Event"
              primary={true}
              onMouseDown={this.handleSubmit.bind(this)}
              onTouchEnd={this.handleSubmit.bind(this)}
            />
          </div>
        </form>
      </div>
    )
  }
}
