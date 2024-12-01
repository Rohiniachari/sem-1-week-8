// LocalStorageSync.js
import React, { useState, useEffect } from 'react';

const LocalStorageSync = () => {
  const [name, setName] = useState(() => localStorage.getItem('name') || '');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored Name: {name}</p>
    </div>
  );
};

export default LocalStorageSync;
