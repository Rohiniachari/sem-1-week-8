import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>
      <input
        type="text"
        className="p-2 border-2 border-gray-400 rounded-md mb-4"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Get Weather
      </button>
    </div>
  );
}

export default HomePage;
