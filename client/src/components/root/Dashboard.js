import React, { useEffect, useState, } from 'react';

import { Segment, } from 'semantic-ui-react';

import axios from '../../utils/webRequests';
import UpcomingEvents from './UpcomingEvents';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect( () => {
    axios.get('/api/upcoming_events')
      .then( res => {
        setEvents(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <h3>Upcoming Events</h3>
      <UpcomingEvents events={events} />
    </div>
  );
};

export default Dashboard;
