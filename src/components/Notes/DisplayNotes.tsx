import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Note from './Note';

const DisplayNotes: React.FC<{ notes: Note[]; deleteNote: (id: string) => void }> = (props) => {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState('');
  const removeHandler = (id: string) => {
    props.deleteNote(id);
  };

  const copyHandler = (id: string) => {
    const note = props.notes.find((note) => note.id === id);
    if (note) {
      navigator.clipboard.writeText(note.content);
      setCopied(true);
      setCopiedId(id);
      setTimeout(() => {
        setCopied(false);
        setCopiedId('');
      }, 2000);
    }
  };

  return (
    <div className="mx-auto max-w-[80%] pb-10">
      <h1 className="text-orange-600 text-3xl font-bold text-center py-5 mt-20 mb-10">Notes</h1>
      <div className="grid grid-cols-2 gap-y-10 place-items-center">
        {props.notes.map((note) => (
          <div key={note.id} className="w-[30em] min-h-[30em]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-amber-800 py-3">{note.title}</h1>
              {copied && copiedId === note.id && (
                <span className="text-green-600 bg-yellow-400 p-2 rounded">Copied!</span>
              )}
              <FaTrash
                className="text-stone-800 text-2xl float-right cursor-pointer"
                onClick={removeHandler.bind(null, note.id)}
              />
            </div>
            <p
              className="text-lg text-gray-900 py-3 cursor-pointer"
              onClick={copyHandler.bind(null, note.id)}
              role="presentation">
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayNotes;
