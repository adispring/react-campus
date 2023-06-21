import React, { useState } from 'react';
import { Todo } from './interfaces';
import Input from './Input';
import Item from './Item';
import { initialTodoList } from './constants';

import './styles.css';

const TodoList = (): JSX.Element => {
  /** todo 列表数据源 */
  const [todos, setTodos] = useState<Todo[]>(initialTodoList);

  /** 添加 todo */
  const handleAdd = (value: string) =>
    setTodos([...todos, { id: Date.now(), text: value, completed: false }]);

  /** 切换 todo 的完成状态 */
  const handleToggle = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  /** 删除 todo */
  const handleDelete = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h1>Todo List</h1>
      <Input onAdd={handleAdd} />
      <ul className="content">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
