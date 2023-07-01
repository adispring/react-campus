import React, { useState } from 'react';
import { AddItemProps } from '../interfaces';
import './styles.css';

const AddItem = ({ onAdd }: AddItemProps): JSX.Element => {
  const [value, setValue] = useState('');

  return (
    <div className="add-item-container">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={() => {
          onAdd(value);
          setValue('');
        }}
      >
        添加TODO
      </button>
    </div>
  );
};

export default AddItem;
