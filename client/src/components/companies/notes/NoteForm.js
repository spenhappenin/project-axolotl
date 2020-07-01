import React, { useEffect, useState, } from 'react';

import axios from '../../../utils/webRequests';
import { useParams, } from 'react-router-dom';

import { Form, } from 'semantic-ui-react';

const NoteForm = ({ company, setCompany, setShowForm, note, setEditing, }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { id: companyId, } = useParams();

  useEffect( () => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      axios.put(`/api/companies/${companyId}/company_notes/${note.id}`, { title, body })
      .then( res => {
        setEditing(false);
        setCompany({ ...company, notes: company.notes.map(n => n.id === note.id ? res.data : n) });
      })
      .catch( err => {
        // TODO: Error handling
        console.log(err);
      })
    } else {
      axios.post(`/api/companies/${companyId}/company_notes`, { title, body })
      .then( res => {
        setCompany({ ...company, notes: [res.data, ...company.notes] });
        setShowForm(false);
      })
      .catch( err => {
        // TODO: Error handling
        console.log(err);
      })
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '100%', }}>
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
