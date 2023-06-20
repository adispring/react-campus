import React, { useState } from 'react';
import { InputProps } from './interfaces';

const Input = ({ onAddTodo }: InputProps): JSX.Element => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => onAddTodo(value)}>Add</button>
    </div>
  );
};

export default Input;
