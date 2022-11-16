import React from 'react';
import AddNewNote from './AddNewNote';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';

const Notes: React.FC = () => {
  const createNoteHandler = (title: string, content: string) => {
    if (title.trim().length !== 0 && content.trim().length !== 0) {
      const id = uuidv4();
      const note = new Note(id, title, content);
      console.log(note);
      console.log(note.createdAt);
    }
  };
  return (
    <div>
      <AddNewNote createNote={createNoteHandler} />
    </div>
  );
};

export default Notes;
