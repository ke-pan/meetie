import React from 'react';
import EventItem from './eventItem';
import AppBar from 'material-ui/lib/app-bar';

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
        <AppBar title="Events" showMenuIconButton={false} />
        <div className="eventList">
          { events }
        </div>
      </div>

    );
  }
}
