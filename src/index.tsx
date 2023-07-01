import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles.css';

import TodoList from './TodoList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
