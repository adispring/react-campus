import React from 'react';
import { InputProps } from './interfaces';

const Input = ({ value, onChange, onAddTodo }: InputProps): JSX.Element => (
  <div>
    <input type="text" value={value} onChange={(event) => onChange(event.target.value)} />
    <button onClick={onAddTodo}>Add</button>
  </div>
);

export default Input;
