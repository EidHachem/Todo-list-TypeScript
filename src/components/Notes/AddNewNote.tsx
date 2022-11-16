import React, { useRef } from 'react';

const AddNewNote: React.FC<{ createNote: (title: string, content: string) => void }> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredTitle = titleRef.current!.value;
    const enteredContent = contentRef.current!.value;
    props.createNote(enteredTitle, enteredContent);
  };
  return (
    <div className="mx-auto max-w-[50%]">
      <h1 className="text-orange-600 text-3xl font-bold text-center py-5 mt-5">Add new note</h1>
      <form className="flex flex-col items-center gap-4" onSubmit={submitHandler}>
        <input type="text" placeholder="Title" className="w-[30em]" ref={titleRef} />
        <textarea placeholder="Description" rows={15} className="w-[30em]" ref={contentRef} />
        <button type="submit" className="bg-orange-600 text-white p-2 rounded">
          Add note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
