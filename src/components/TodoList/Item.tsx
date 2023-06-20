import React from 'react';
import { ItemProps } from './interfaces';

const Item = ({ todo, onDeleteTodo, onToggleTodo }: ItemProps): JSX.Element => (
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

export default Item;
