import React, { useState, } from 'react';

import { Button, } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';

import axios from '../../utils/webRequests';
import NoteForm from './NoteForm';

const Note = ({ id, title, body, setCompany, company, setShowForm, }) => {
  const { id: companyId, } = useParams();
  const [editing, setEditing] = useState(false);

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this note?');

    if (confirm)
      axios.delete(`/api/companies/${companyId}/company_notes/${id}`)
        .then( () => {
          setCompany({ ...company, notes: company.notes.filter( c => c.id != id) });
          // TODO: Handle Flash Message
        })
        .catch( err => {
          // TODO: Error handling
          console.log(err);
        })
  };

  return (
    <div>
      <Button icon={editing ? 'cancel' : 'pencil'} onClick={() => setEditing(!editing)} />
      <Button icon="trash" color="red" onClick={handleDelete} />
      {
        editing ?
          <NoteForm
            note={{ id, title, body, }}
            setEditing={setEditing}
            company={company}
            setCompany={setCompany}
          />
        :
        <div>
          { title && <h4>{ title }</h4> }
          <p>{ body }</p>
          <hr />
        </div>
      }
    </div>
  );
};

export default Note;