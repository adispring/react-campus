import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyButton />
      <img className="avatar" alt="haha"/>
      <ul>{listItems}</ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
