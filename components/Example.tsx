import React, { forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
    <button onClick={props.onButtonClick}>Click me</button>
  </div>
));

function Example() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FancyInput ref={inputRef} onButtonClick={handleClick} />
    </div>
  );
}
