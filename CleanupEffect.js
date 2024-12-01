// CleanupEffect.js
import React, { useState, useEffect } from 'react';

const CleanupEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Set up the resize event listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array: runs once on mount

  return <h1>Window Width: {windowWidth}px</h1>;
};

export default CleanupEffect;
