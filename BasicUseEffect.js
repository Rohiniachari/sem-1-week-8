// BasicUseEffect.js
import React, { useState, useEffect } from 'react';

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);

  // Log message whenever `count` changes
  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]); // Dependency array: runs only when `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default BasicUseEffect;
