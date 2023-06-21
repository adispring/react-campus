import React, { useState } from 'react';
import { InputProps } from '../interfaces';
import './styles.css';

const Input = ({ onAdd }: InputProps): JSX.Element => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onAdd(value);
    setValue('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={handleClick}>添加TODO</button>
    </div>
  );
};

export default Input;
