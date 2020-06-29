import React from 'react';

import { Button, } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';

import axios from '../../utils/webRequests';

const Note = ({ id, title, body, setCompany, company, }) => {
  const { id: companyId, } = useParams();

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
      <Button icon="pencil" />
      <Button icon="trash" color="red" onClick={handleDelete} />
      { title && <h4>{ title }</h4> }
      <p>{ body }</p>
      <hr />
    </div>
  );
};

export default Note;
