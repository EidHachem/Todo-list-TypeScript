import { useState } from 'react';
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

  const changeStatusHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const undoCompletedHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = false;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <div className="container mx-auto">
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        changeStatusHandler={changeStatusHandler}
        undoCompletedHandler={undoCompletedHandler}
      />
    </div>
  );
};

export default Todos;
