import React from 'react';

import moment from 'moment';

import { Segment, } from 'semantic-ui-react';

const UpcomingEvents = ({ events, }) => (
  <Segment>
    {
      events.length == 0 ?
        <h5>No Upcoming Events</h5>
      :
        events.map( event => (
          <h5>{ event.title } - { event.event_type } - { moment(event.scheduled_time).format('ddd, ll') }</h5>
        ))
    }
  </Segment>
);

export default UpcomingEvents;
