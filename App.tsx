import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Game from './components/Game';
import Mobx from './components/Mobx';
import MobxTodoList, { Todo, TodoList } from './components/MobxTodoList';

const store = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
]);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/mobx" element={<Mobx />} />
        <Route
          path="/mobx-todo-list"
          element={<MobxTodoList todoList={store} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
