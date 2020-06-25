import React, { useState, } from 'react';

import axios from '../../utils/webRequests';

import { Form, } from 'semantic-ui-react';
import { useHistory, } from 'react-router-dom';

const CompanyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const { push, } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/companies', { title, description, logo_url: logoUrl, industry, })
      .then( res => {
        push(`/companies/${res.data.id}`);
      })
      .catch( err => {
        console.log(err);
      })
  };

  return (
    <div>
      <h1>New Company</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Title"
          name="title"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Form.TextArea
          label="Description"
          placeholder="Description"
          name="description"
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Form.Input
          label="Logo URL"
          placeholder="Logo URL"
          name="logoUrl"
          required
          value={logoUrl}
          onChange={e => setLogoUrl(e.target.value)}
        />
        <Form.Input
          label="Industry"
          placeholder="Industry"
          name="industry"
          required
          value={industry}
          onChange={e => setIndustry(e.target.value)}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default CompanyForm;
