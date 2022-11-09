import React, { useRef } from 'react';

const AddTodo: React.FC<{
  addTodoHandler: (text: string, priority: string, time: string) => void;
}> = (props) => {
  const today = new Date();
  const time = today.getHours() + ':' + today.getMinutes();
  const textRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textRef.current!.value;
    const enteredPriority = priorityRef.current!.value;
    const enteredTime = timeRef.current!.value;

    if (
      enteredText.trim().length !== 0 &&
      enteredPriority.trim().length !== 0 &&
      enteredTime.trim().length !== 0
    ) {
      props.addTodoHandler(enteredText, enteredPriority, enteredTime);
    }

    textRef.current!.value = '';
    priorityRef.current!.value = '0';
    timeRef.current!.value = time;
  };

  return (
    <div className="mx-auto">
      <h1 className="text-center py-4 text-4xl text-orange-600">Add a todo</h1>
      <form className="flex justify-center items-center gap-3" onSubmit={submitHandler}>
        <input type="text" placeholder="Buy groceries..." ref={textRef} />
        <input type="time" placeholder={time} defaultValue={time} ref={timeRef} />
        <select defaultValue={0} ref={priorityRef}>
          <option value="0" disabled>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="bg-orange-600 text-white rounded py-2 px-3">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
