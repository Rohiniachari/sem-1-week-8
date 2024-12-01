// UseEffectOnce.js
import React, { useEffect } from 'react';

const UseEffectOnce = () => {
  // Run only once
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array

  return <h1>Check the console for a message</h1>;
};

export default UseEffectOnce;

