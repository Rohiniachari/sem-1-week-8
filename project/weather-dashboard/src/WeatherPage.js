import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherPage() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';  // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        setError('City not found or API error');
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {error && <p className="text-red-500">{error}</p>}
      {weatherData ? (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{weatherData.name}</h2>
          <div className="flex justify-between">
            <div className="text-2xl">
              <p>{weatherData.main.temp}°C</p>
              <p className="text-lg">{weatherData.weather[0].description}</p>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-xl">Weather Details</h3>
            <ul>
              <li>Humidity: {weatherData.main.humidity}%</li>
              <li>Wind Speed: {weatherData.wind.speed} m/s</li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl mt-10">Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherPage;
