import React from 'react';
import AddNewNote from './AddNewNote';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';
import DisplayNotes from './DisplayNotes';

const Notes: React.FC = () => {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const [notesList, setNotesList] = React.useState<Note[]>(notes);
  const createNoteHandler = (title: string, content: string) => {
    if (title.trim().length !== 0 && content.trim().length !== 0) {
      const id = uuidv4();
      const note = new Note(id, title, content);
      setNotesList((prevNotes) => {
        return [...prevNotes, note];
      });
      localStorage.setItem('notes', JSON.stringify([...notesList, note]));
    }
  };
  return (
    <div>
      <AddNewNote createNote={createNoteHandler} />
      <DisplayNotes notes={notesList} />
    </div>
  );
};

export default Notes;
