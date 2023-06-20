import React, { useState } from 'react';
import { Todo } from './interfaces';
import Input from './Input';
import Item from './Item';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  /** 添加 todo */
  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  /** 删除 todo */
  const handleDeleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

  /** 切换 todo 的完成状态 */
  const handleToggleTodo = (id: number) =>
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );

  return (
    <div>
      <h1>Todo List</h1>
      <Input value={inputValue} onChange={setInputValue} onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
