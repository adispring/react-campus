import React from 'react';
import { ItemProps } from './interfaces';

const Item = ({ todo, onDelete, onToggle }: ItemProps): JSX.Element => (
  <li>
    <span
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);

export default Item;
