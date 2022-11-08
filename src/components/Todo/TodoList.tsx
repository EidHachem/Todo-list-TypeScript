import React from 'react';
import Todo from './Todo';

const TodoList: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <div
              className={`${todo.priority === 'low' && 'bg-slate-500'} ${
                todo.priority === 'medium' && 'bg-teal-600'
              } ${todo.priority === 'high' && 'bg-red-500'} text-white`}>
              {todo.text}
              <span>{todo.time}</span>
              <span>{todo.priority}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
