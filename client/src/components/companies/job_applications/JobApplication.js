import React, { useEffect, useState, } from 'react';

import moment from 'moment';
import styled from 'styled-components';
import { useParams, } from 'react-router-dom';
import { Button, Icon, Segment, } from 'semantic-ui-react';

import axios from '../../../utils/webRequests';
import EventForm from './EventForm';

const JobApplication = () => {
  const [jobApplication, setJobApplication] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { company_id, id, } = useParams();

  useEffect( () => {
    axios.get(`/api/companies/${company_id}/job_applications/${id}`)
      .then( res => {
        setJobApplication(res.data);
        setLoaded(true);
      })
      .catch( err => {
        // TODO: Error Handling
        console.log(err);
      })
  }, []);

  if (loaded) {
    return (
      <div>
        <h1>{ jobApplication.company.title } - { jobApplication.position }</h1>
        <p>{ jobApplication.status }</p>
        <p>{ jobApplication.date_submitted }</p>
        <p>{ jobApplication.salary }</p>
        <p>{ jobApplication.description }</p>
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
                  { event.complete ? <Icon name="check square outline" size="big" /> : <Icon name="square outline" size="big" /> }
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

const Text = styled.p`
  font-size: 22px;
  font-weight: ${ props => props.header ? 'bolder' : 'normal' };
`;

export default JobApplication;
