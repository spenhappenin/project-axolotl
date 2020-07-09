import React, { useEffect, useState, } from 'react'

import { Form, } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';

import axios from '../../utils/webRequests';

const JobApplicationForm = (props) => {
  const [companies, setCompanies] = useState([]);
  const [companyId, setCompanyId] = useState('');
  const [dateSubmitted, setDateSubmitted] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const { company_id, } = useParams();

  // if company_id is in the url params then set the current company
  useEffect( () => {
    if (company_id) setCompanyId(company_id);
  }, []);

  // Fills input field with list of companies
  useEffect( () => {
    axios.get('/api/companies')
      .then( res => {
        setCompanies(res.data.map( c => {
          return { key: c.id, text: c.title, value: c.id, }
        }));
      })
      .catch( err => {
        console.log(err);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h1>Job Application Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Dropdown
            fluid selection
            required
            options={companies}
            name="companyId"
            label="Company"
            placeholder="Company"
            value={companyId}
            defaultValue={6}
            type="text"
            onChange={(e, { value, }) => setCompanyId(value)}
          />
          <Form.Input
            required
            name="position"
            label="Position"
            placeholder="Position"
            value={position}
            type="text"
            onChange={e => setPosition(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            required
            name="dateSubmitted"
            label="Date Submitted"
            placeholder="Date Submitted"
            value={dateSubmitted}
            type="date"
            onChange={e => setDateSubmitted(e.target.value)}
          />
          <Form.Input
            required
            name="salary"
            label="Salary"
            placeholder="Salary"
            value={salary}
            type="number"
            onChange={e => setSalary(e.target.value)}
          />
        </Form.Group>
        <Form.TextArea
          name="description"
          label="Description"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Form.Button type="submit" color="blue">Submit</Form.Button>
      </Form>
    </div>
  );
};

export default JobApplicationForm;
