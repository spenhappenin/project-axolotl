import React, { useEffect, useState, } from 'react';

import { Link, } from 'react-router-dom';
import { Button, Table, Icon, Input, Select, } from 'semantic-ui-react';

import axios from '../../utils/webRequests';

const JobApplications = (props) => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('pending');

  useEffect( () => {
    axios.get(`/api/all_applications?status=${statusFilter}`)
      .then( res => {
        setApplications(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }, [statusFilter]);

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
        <Select
          name="statusFilter"
          options={statusOptions}
          placeholder="Filter by status"
          value={statusFilter}
          onChange={(e, { value, }) => setStatusFilter(value)}
        />
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
              <Table.Cell>
                <Link to={`/companies/${app.company_id}/applications/${app.id}`}>{ app.position }</Link>
              </Table.Cell>
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

const statusOptions = [
  { key: 'p', text: 'pending', value: 'pending', },
  { key: 'a', text: 'approved', value: 'approved', },
  { key: 'd', text: 'denied', value: 'denied', },
  { key: 'all', text: 'all', value: 'all', },
];

export default JobApplications;
