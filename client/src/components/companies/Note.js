import React, { useState, } from 'react';

import { Dropdown, Icon, Segment, } from 'semantic-ui-react';
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
    <Segment raised style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
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
        </div>
      }
      <Dropdown
        floating
        pointing
        icon={<Icon size="large" name="setting" color="grey" style={{ marginLeft: '20px', height: '25px' }} />}
      >
        <Dropdown.Menu>
          <Dropdown.Item text="edit" onClick={() => setEditing(!editing)} />
          <Dropdown.Item text="delete" onClick={handleDelete} />
        </Dropdown.Menu>
      </Dropdown>
    </Segment>
  );
};

export default Note;
