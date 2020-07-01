import React, { useState, } from 'react';

import { Button, Segment, } from 'semantic-ui-react';

import Note from './Note';
import NoteForm from './NoteForm';

// TODO: Company Context? Avoid all the prop drilling

const Notes = ({ company, notes, setCompany, }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Segment>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <h2>Notes</h2>
        <Button color="blue" onClick={() => setShowForm(!showForm)}>
          { showForm ? 'Cancel' : 'Add Note' }
        </Button>
      </div>

      { showForm &&
        <NoteForm
          company={company}
          setCompany={setCompany}
          setShowForm={setShowForm}
        />
      }

      <br />
      {
        notes && notes.map( note => (
          <Note
            key={note.id}
            { ...note }
            setCompany={setCompany}
            company={company}
            setShowForm={setShowForm}
          />
        ))
      }
    </Segment>
  );
};

export default Notes;
