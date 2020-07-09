import React from 'react';

import moment from 'moment';
import { Link, useParams, } from 'react-router-dom';
import { Button, Segment, } from 'semantic-ui-react';

const JobApplications = ({ applications, }) => {
  const {id: companyId } = useParams();

  return (
    <Segment>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <h2>Applications</h2>
        <Link to={`/companies/${companyId}/applications/new`}>
          <Button color="blue">New Application</Button>
        </Link>
      </div>
      <br />
      {
        applications && applications.map( app => (
          <Link
            to={`/companies/${companyId}/applications/${app.id}`}
            style={{ textDecoration: 'none', color: 'black', }}
          >
            <Segment color={ statusColor(app.status) } style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <h3 style={{ margin: '10px 0px', }}>{ app.position }</h3>
                <h5 style={{ margin: '10px 0px', }}>{ moment(app.date_submitted, "YYYYMMDD").fromNow() }</h5>
              </div>
              <p>Date Submitted: { moment(app.date_submitted).format('LL') }</p>
              <h5>Status: { app.status }</h5>
              <p>Salary: ${ app.salary }</p>
            </Segment>
          </Link>
        ))
      }
    </Segment>
  );
};

const statusColor = (status) => {
  switch(status) {
    case 'pending':
      return 'blue';
    case 'approved':
      return 'green';
    case 'denied':
      return 'red';
    default:
      return 'grey';
  }
}

export default JobApplications;
