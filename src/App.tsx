import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoList from './components/TodoList';

import Context from './components/StateManage/Context';
import Redux from './components/StateManage/Redux';
import Mobx from './components/StateManage/Mobx';

import UseWindowSize from './components/Reuse/UseWindowSize';
import WithWindowListener from './components/Reuse/withWindowListener';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/context" element={<Context />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/mobx" element={<Mobx />} />

        <Route path="/use-window-size" element={<UseWindowSize />} />
        <Route path="/with-window-listener" element={<WithWindowListener />} />
      </Routes>
    </Router>
  );
};

export default App;
