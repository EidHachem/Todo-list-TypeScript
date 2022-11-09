import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/Todo/Todos';

const App: FC = () => {
  return (
    <div className="bg-green-800 flex flex-col min-h-[100vh] py-10">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
