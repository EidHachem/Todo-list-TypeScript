import React, { useRef } from 'react';

const AddTodo: React.FC<{
  addTodoHandler: (text: string, priority: string, time: string) => void;
}> = (props) => {
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
    priorityRef.current!.value = '';
    timeRef.current!.value = '';
  };

  return (
    <div>
      <div>
        <h1>Add a todo</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Buy groceries..." ref={textRef} />
          <input type="time" ref={timeRef} />
          <select defaultValue={0} ref={priorityRef}>
            <option value="0" disabled>
              Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
