import React, { useState } from 'react';
import { Todo } from './interfaces';
import Input from './Input';
import Item from './Item';
import { initialTodoList } from './constants';

import './styles.css';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(initialTodoList);

  /** 添加 todo */
  const handleAddTodo = (value: string) =>
    setTodos([...todos, { id: Date.now(), text: value, completed: false }]);

  /** 删除 todo */
  const handleDelete = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

  /** 切换 todo 的完成状态 */
  const handleToggle = (id: number) =>
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );

  return (
    <div>
      <h1>Todo List</h1>
      <Input onAdd={handleAddTodo} />
      <ul className="content">
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
