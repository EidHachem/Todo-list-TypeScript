import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/Todo/Todos';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/todos" element={<Todos />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default App;
