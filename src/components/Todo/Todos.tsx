import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string, priority: string, time: string) => {
    const newTodo = new Todo(text, priority, time);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
