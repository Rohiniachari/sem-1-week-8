import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-500 text-white p-2">
        Toggle Dark Mode
      </button>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
        This is a {darkMode ? 'dark' : 'light'} mode content.
      </div>
    </div>
  );
};

export default DarkModeToggle;
