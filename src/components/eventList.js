import React from 'react';
import EventItem from './eventItem';
import AppBar from 'material-ui/lib/app-bar';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
  margin: 12,
}

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const events = this.props.data.map(function(event) {
      return (
        <EventItem data={event} />
      );
    });

    return (
      <div>
        <AppBar title="Events" showMenuIconButton={false} >
          <Link to="new">
            <RaisedButton label="New Event" primary={true} style={buttonStyle} />
          </Link>
        </AppBar>
        <div className="eventList">
          { events }
        </div>
      </div>

    );
  }
}
