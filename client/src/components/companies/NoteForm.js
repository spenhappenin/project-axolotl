import React, { useState, } from 'react';

import axios from '../../utils/webRequests';
import { useParams, } from 'react-router-dom';

import { Form, } from 'semantic-ui-react';

const NoteForm = ({ company, setCompany, setShowForm, }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { id, } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/companies/${id}/company_notes`, { title, body })
      .then( res => {
        setCompany({ ...company, notes: [res.data, ...company.notes] });
        setShowForm(false);
      })
      .catch( err => {
        // TODO: Error handling
        console.log(err);
      })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="title"
        label="Title"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <Form.TextArea
        name="body"
        required
        label="Body"
        placeholder="Content..."
        onChange={e => setBody(e.target.value)}
        value={body}
      />
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  );
};

export default NoteForm;
