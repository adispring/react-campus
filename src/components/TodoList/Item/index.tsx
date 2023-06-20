import React from 'react';
import { ItemProps } from '../interfaces';
import './styles.css';

const Item = ({ todo, onDelete, onToggle }: ItemProps): JSX.Element => (
  <li className="item">
    <span
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <button className="delete" onClick={() => onDelete(todo.id)}>
      Delete
    </button>
  </li>
);

export default Item;
