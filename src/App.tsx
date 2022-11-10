import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todo/Todos';
import Expenses from './components/Budget/Expenses';

const App: FC = () => {
  return (
    <div className="bg-green-800 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
