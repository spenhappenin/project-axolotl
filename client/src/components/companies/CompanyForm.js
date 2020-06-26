import React, { useEffect, useState, } from 'react';

import axios from '../../utils/webRequests';

import { Button, Form, } from 'semantic-ui-react';
import { useHistory, } from 'react-router-dom';

const CompanyForm = (props) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const { push, } = useHistory();

  useEffect(() => {
    if (props.company) {
      const { id, title, description, logo_url, industry, } = props.company;
      setId(id);
      setTitle(title);
      setDescription(description);
      setLogoUrl(logo_url);
      setIndustry(industry);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.company) {
      axios.put(`/api/companies/${id}`, { title, description, logo_url: logoUrl, industry, })
        .then( res => {
          props.setEditing(false);
          props.setCompany(res.data);
        })
        .catch( err => {
          console.log(err);
        })
    } else {
      axios.post('/api/companies', { title, description, logo_url: logoUrl, industry, })
        .then( res => {
          push(`/companies/${res.data.id}`);
        })
        .catch( err => {
          console.log(err);
        })
    }
  };

  return (
    <div>
      <br />
      { !props.company && <h1>New Company</h1> }
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
        <Form.Button type="submit">Submit</Form.Button>
        { props.company && <Button onClick={() => props.setEditing(false)}>Cancel</Button> }
      </Form>
    </div>
  );
};

export default CompanyForm;
