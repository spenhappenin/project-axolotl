import React, { useState, } from 'react';

import { Form, } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';

import axios from '../../../utils/webRequests';

const EventForm = ({ jobApplication, setJobApplication, setShowForm, }) => {
  const [eventType, setEventType] = useState('interview');
  const [subType, setSubType] = useState('technical');
  const [scheduledDate, setScheduledDate] = useState('');
  const { id, } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/job_applications/${id}/events`, {
      event_type: eventType,
      sub_type: subType,
      scheduled_date: scheduledDate,
    })
      .then( res => {
        setJobApplication({ ...jobApplication, events: [res.data, ...jobApplication.events], })
        setShowForm(false);
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="eventType"
            placeholder="Event Type"
            label="Event Type"
            value={eventType}
            onChange={e => setEventType(e.target.value)}
            required
          />
          <Form.Input
            name="subType"
            placeholder="Sub Type"
            label="Sub Type"
            value={subType}
            onChange={e => setSubType(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
        <Form.Input
            type="datetime-local"
            name="scheduledDate"
            placeholder="Scheduled Date"
            label="Scheduled Date"
            value={scheduledDate}
            onChange={e => setScheduledDate(e.target.value)}
            required
          />
          <Form.Button type="submit" color="blue">Submit</Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EventForm;
