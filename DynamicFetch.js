// DynamicFetch.js
import React, { useState, useEffect } from 'react';

const DynamicFetch = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }
  }, [userId]); // Dependency array includes `userId`

  return (
    <div>
      <h1>User Details:</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
};

export default DynamicFetch;
