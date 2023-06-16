import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput
        value={inputValue}
        onChange={handleInputChange}
        onAddTodo={handleAddTodo}
      />
      <TodoListItems
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

function TodoInput({ value, onChange, onAddTodo }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}

function TodoListItems({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
}

function TodoListItem({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoList;
