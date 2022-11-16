import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todo/Todos';
import Expenses from './components/Budget/Expenses';
import Home from './components/Home/Home';
import Notes from './components/Notes/Notes';

const App: FC = () => {
  return (
    <div className="bg-gradient-to-tr to-green-800 from-green-200 flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
