import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p onClick={()=>{setCount(prevCount => prevCount + 1)}}>Increment</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
