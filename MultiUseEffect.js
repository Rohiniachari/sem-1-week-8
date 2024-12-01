// MultiUseEffect.js
import React, { useState, useEffect } from 'react';

const MultiUseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Update the document title whenever `count` changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {data && <div><strong>Fetched Data:</strong> {data.title}</div>}
    </div>
  );
};

export default MultiUseEffect;
