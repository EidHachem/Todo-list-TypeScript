import React from 'react';
import Todo from './Todo';

const TodoList: React.FC<{ todos: Todo[]; deleteTodoHandler: (id: string) => void }> = (props) => {
  const deleteHandler = (id: string) => {
    props.deleteTodoHandler(id);
  };

  return (
    <div className="mt-12">
      <h2 className="text-orange-600 font-bold text-center text-2xl py-4">All Todos</h2>
      <table className="w-full border border-orange-600 rounded-sm border-separate text-white">
        <thead>
          <tr className="bg-orange-600">
            <th className="py-2">Text</th>
            <th className="py-2">Priority</th>
            <th className="py-2">Time</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => (
            <tr
              key={todo.id}
              className={`${
                todo.priority === 'low' && 'bg-yellow-200 text-gray-700 font-semibold'
              } ${todo.priority === 'medium' && 'bg-yellow-600'} ${
                todo.priority === 'high' && 'bg-amber-700'
              } border-b border-gray-300 text-center`}>
              <td className="py-2">{todo.text}</td>
              <td className="py-2">{todo.priority}</td>
              <td className="py-2">{todo.time}</td>
              <td className="py-2">
                <button
                  className="bg-zinc-800 rounded py-1 px-2 text-white"
                  onClick={deleteHandler.bind(null, todo.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
