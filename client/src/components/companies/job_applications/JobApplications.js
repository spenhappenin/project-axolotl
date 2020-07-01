import React from 'react';

import moment from 'moment';
import { Button, Segment, } from 'semantic-ui-react';

const JobApplications = ({ applications, }) => {
  return (
    <Segment>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <h2>Applications</h2>
        <Button color="blue">New Application</Button>
      </div>
      <br />
      {
        applications && applications.map(app => (
          <>
            {/* <br /> */}
            <Segment>
              <h3>{ app.position }</h3>
              <p>{ moment(app.date_submitted, "YYYYMMDD").fromNow() }</p>
              <p>Date Submitted: { moment(app.date_submitted).format('LL') }</p>
              <p>Status: { app.active ? 'active' : 'inactive' }</p>
              <p>Salary: ${ app.salary }</p>
            </Segment>
            {/* <br /> */}
            {/* <hr /> */}
          </>
        ))
      }
    </Segment>
  );
};

export default JobApplications;
