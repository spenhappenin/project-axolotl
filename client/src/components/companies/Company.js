import React, { useEffect, useState, } from 'react';

import axios from '../../utils/webRequests';

import CompanyForm from './CompanyForm';
import Notes from './notes/Notes';
import JobApplications from './job_applications/JobApplications';
import { Button, Dropdown, Segment, } from 'semantic-ui-react';
import { useHistory, useParams, } from 'react-router-dom';

const Company = () => {
  const [company, setCompany] = useState({});
  const [editing, setEditing] = useState(false);
  const { id, } = useParams();
  const { push, } = useHistory();

  useEffect( () => {
    axios.get(`/api/companies/${id}`)
      .then( res => {
        setCompany(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  const renderShow = () => (
    <>
      <br />
      <br />
      <img src={company.logo_url} alt={company.title} />
      <h1>{ company.title }</h1>
      <br />
      <p><b>{ company.industry }</b></p>
      <br />
      <p>{ company.description }</p>
      <br />
    </>
  );

  const renderEdit = () => <CompanyForm company={company} setEditing={setEditing} setCompany={setCompany} />;

  const onDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this company?');

    if (confirm)
      axios.delete(`/api/companies/${id}`)
        .then( () => {
          console.log('Deleted....');
          push('/companies');
        })
        .catch( err => {
          // TODO: Error handling
          console.log(err);
        })
  };

  return (
    <div>
      <Button
        color="blue"
        onClick={() => push('/companies')}
      >
        All Companies
      </Button>

      <Dropdown icon="setting">
        <Dropdown.Menu>
          <Dropdown.Item text="edit" onClick={() => setEditing(true)} />
          <Dropdown.Item text="delete" onClick={onDelete} />
        </Dropdown.Menu>
      </Dropdown>

      { editing ? renderEdit() : renderShow() }

      <JobApplications applications={company.applications} />
      <br />
      <Segment>
        <h2>Contacts</h2>
      </Segment>
      <br />
      {/* TODO: Prop drilling here... better way? */}
      <Notes
        company={company}
        notes={company.notes}
        setCompany={setCompany}
      />
    </div>
  );
};

export default Company;
