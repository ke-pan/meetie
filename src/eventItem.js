import React from 'react';

export default class EventItem extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <p>
          from <span>{data.started_at.date} {data.started_at.time}</span>
          to   <span>{data.ended_at.date} {data.ended_at.time}</span>
          hosted by <span>{data.host}</span> at <span>{data.location}</span>
        </p>
        <p>{data.title}</p>
        <p>{data.guests}</p>
        <p>{data.message}</p>
      </div>
    );
  }
}
