import React from 'react';

const List = (props) => (
  <ul>
    {props.array.map((item) => (
      <li key={item.id} className="list-item">
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
