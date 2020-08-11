import React, { useEffect, useState, } from 'react';

import moment from 'moment';
import styled from 'styled-components';
import { useParams, } from 'react-router-dom';
import { Button, Dropdown, Form, Icon, Segment, } from 'semantic-ui-react';

import axios from '../../../utils/webRequests';
import EventForm from './EventForm';

const JobApplication = () => {
  const [jobApplication, setJobApplication] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const { company_id, id, } = useParams();

  const [status, setStatus] = useState('');
  const [dateSubmitted, setDateSubmitted] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  useEffect( () => {
    axios.get(`/api/companies/${company_id}/job_applications/${id}`)
      .then( res => {
        setJobApplication(res.data);
        setStatus(res.data.status);
        setDateSubmitted(res.data.date_submitted);
        setSalary(res.data.salary);
        setDescription(res.data.description);
        setLoaded(true);
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/companies/${company_id}/job_applications/${id}`, { status, salary, description, date_submitted: dateSubmitted, })
      .then( res => {
        setJobApplication(res.data);
        setEditing(false);
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  };

  const handleComplete = (eventId) => {
    axios.put(`/api/job_applications/${jobApplication.id}/events/${eventId}`)
      .then( res => {
        const events = jobApplication.events.map( event => event.id === res.data.id ? res.data : event )
        setJobApplication({ ...jobApplication, events, });
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  };

  const renderShow = () => (
    <>
      <p>{ jobApplication.status }</p>
      <p>{ jobApplication.date_submitted }</p>
      <p>{ jobApplication.salary }</p>
      <p>{ jobApplication.description }</p>
    </>
  );

  const renderEdit = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group width="equal">
        <Form.Select
          required
          name="status"
          label="Status"
          options={statusOptions}
          placeholder='Pending'
          value={status}
          onChange={(e, { value, }) => setStatus(value)}
        />
        <Form.Input
          required
          name="dateSubmitted"
          label="Date Submitted"
          placeholder="Date Submitted"
          type="date"
          value={dateSubmitted}
          onChange={(e, { value }) => setDateSubmitted(value)}
        />
        <Form.Input
          required
          name="salary"
          label="Salary"
          placeholder="Salary"
          type="number"
          value={salary}
          onChange={(e, { value }) => setSalary(value)}
        />
      </Form.Group>
      <Form.TextArea
        name="description"
        label="Description"
        placeholder="Description"
        value={description}
        onChange={(e, { value }) => setDescription(value)}
      />
      <Form.Button type="submit" color="blue">Submit</Form.Button>
    </Form>
  );

  if (loaded) {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", }}>
          <h1>{ jobApplication.company.title } - { jobApplication.position }</h1>
          <Dropdown icon="setting">
            <Dropdown.Menu>
              <Dropdown.Item text="edit" onClick={() => setEditing(!editing)} />
              <Dropdown.Item text="delete"  />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {
          editing ?
            renderEdit()
          :
            renderShow()
        }

        <br />
        <Segment>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Application Events</h3>
            <Button
              color="blue"
              onClick={() => setShowForm(!showForm)}
            >
              { showForm ? 'Cancel Event' : 'Add Event' }
            </Button>
          </div>

          { showForm &&
            <EventForm
              jobApplication={jobApplication}
              setJobApplication={setJobApplication}
              setShowForm={setShowForm}
            />
          }

          {
            jobApplication.events.map( event => (
              <Segment key={event.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text header>{ event.event_type + ' ' + `(${event.sub_type})` }</Text>
                  <Icon
                    name={event.complete ? "check square outline" : "square outline"}
                    size="big"
                    onClick={() => handleComplete(event.id)}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <Icon name="calendar alternate outline" size="big" />
                    <Text>{ moment(event.scheduled_date).format('ddd, ll') }</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon name="clock outline" size="big" />
                    <Text>{ moment(event.scheduled_date).format('LT') }</Text>
                  </div>
                </div>
                <br />
                <h4>Notes</h4>
                <hr />
              </Segment>
            ))
          }
        </Segment>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
};

const statusOptions = [
  { key: 'p', text: 'Pending', value: 'pending' },
  { key: 'a', text: 'Approved', value: 'approved' },
  { key: 'd', text: 'Denied', value: 'denied' },
]

const Text = styled.p`
  font-size: 22px;
  font-weight: ${ props => props.header ? 'bolder' : 'normal' };
`;

export default JobApplication;
