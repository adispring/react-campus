import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoList from './components/TodoList';
import Context from './components/StateManage/Context';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </Router>
  );
};

export default App;
