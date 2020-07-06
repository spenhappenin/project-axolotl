import React, { useEffect, useState, } from 'react';

import { Link, } from 'react-router-dom';
import { Button, Table, Icon, Input, } from 'semantic-ui-react';

import axios from '../../utils/webRequests';

const JobApplications = (props) => {
  const [applications, setApplications] = useState([]);

  // const [filteredApplications, setFilteredApplications] = useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    axios.get('/api/all_applications')
      .then( res => {
        setApplications(res.data);
        // setFilteredApplications(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  const filteredApplications = applications.filter( app =>
    app.company_title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <Link to="/applications/new">
          <Button color="blue">New Application</Button>
        </Link>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='Search...'
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Input list='status' placeholder='Filter by status' />
        <datalist id='status'>
          <option value='pending' />
          <option value='declined' />
          <option value='approved' />
          <option value='all' />
        </datalist>
      </div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { filteredApplications.map( app => (
            <Table.Row>
              <Table.Cell>{ app.status }</Table.Cell>
              <Table.Cell>{ app.company_title }</Table.Cell>
              <Table.Cell>{ app.position }</Table.Cell>
              <Table.Cell>{ app.date_submitted }</Table.Cell>
              <Table.Cell>${ app.salary }</Table.Cell>
              <Table.Cell>{ app.description }</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default JobApplications;
