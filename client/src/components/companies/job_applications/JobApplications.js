import React from 'react';

import moment from 'moment';
import { Segment, } from 'semantic-ui-react';

const JobApplications = ({ applications, }) => {
  return (
    <Segment>
      <h2>Applications</h2>
      <br />
      {
        applications && applications.map(app => (
          <>
            <br />
            <div>
              <h3>{ app.position }</h3>
              <p>{ moment(app.date_submitted, "YYYYMMDD").fromNow() }</p>
              <p>Date Submitted: { moment(app.date_submitted).format('LL') }</p>
              <p>Status: { app.active ? 'active' : 'inactive' }</p>
              <p>Salary: ${ app.salary }</p>
            </div>
            <br />
            <hr />
          </>
        ))
      }
    </Segment>
  );
};

export default JobApplications;
