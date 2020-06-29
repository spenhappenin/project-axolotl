import React, { useState, } from 'react';

import { Button, Segment, } from 'semantic-ui-react';

import NoteForm from './NoteForm';

const Notes = ({ company, notes, setCompany, }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Segment>
      <h2>Notes</h2>
      <Button color="blue" onClick={() => setShowForm(!showForm)}>
        { showForm ? 'Cancel' : 'Add Note' }
      </Button>
      <br />
      <br />

      { showForm && <NoteForm company={company} setCompany={setCompany} setShowForm={setShowForm} /> }

      <br />
      <br />
      {
        notes && notes.map( ({ body, id, title, }) => (
          <div key={id}>
            <p>{ body }</p>
            <hr />
          </div>
        ))
      }
    </Segment>
  );
};

export default Notes;
