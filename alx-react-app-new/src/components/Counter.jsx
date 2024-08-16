import React, { useState } from 'react';

function Counter() {
  // Initialize the state
  const [count, setCount] = useState(0);

  // Render the component
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
