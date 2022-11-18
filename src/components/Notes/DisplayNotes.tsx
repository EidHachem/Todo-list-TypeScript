import React from 'react';
import Note from './Note';

const DisplayNotes: React.FC<{ notes: Note[] }> = (props) => {
  return (
    <div className="mx-auto max-w-[80%] pb-10">
      <h1 className="text-orange-600 text-3xl font-bold text-center py-5 mt-20 mb-10">Notes</h1>
      <div className="grid grid-cols-2 gap-y-10 place-items-center">
        {props.notes.map((note) => (
          <div key={note.id} className="w-[30em]">
            <h1 className="text-2xl font-bold text-amber-800 py-3">{note.title}</h1>
            <p className="text-lg text-gray-900 py-3">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayNotes;
