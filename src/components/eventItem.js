import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

export default class EventItem extends React.Component {

  time() {
    return({  })
  }

  render() {
    const { data } = this.props;
    return (
      <Card>
        <CardHeader
          title={data.title}
          subtitle={
            "from " + data.started_at.date + " " + data.started_at.time + " " +
            "to " + data.ended_at.date + " " + data.ended_at.time + " at " + data.location + " " +
            "hosted by " + data.host
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <p>{data.guests}</p>
          <p>{data.message}</p>
        </CardText>
      </Card>
    );
  }
}
