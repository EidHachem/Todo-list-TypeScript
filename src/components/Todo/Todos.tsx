import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Todo from './Todo';

const Todos = () => {
  let savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  const [todos, setTodos] = useState<Todo[]>(savedTodos);

  const addTodoHandler = (text: string, priority: string, time: string) => {
    const newTodo = new Todo(text, priority, time);
    setTodos((prevTodos) => {
      savedTodos = [...prevTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(savedTodos));
      return savedTodos;
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
