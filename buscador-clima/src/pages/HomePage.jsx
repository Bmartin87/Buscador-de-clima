import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherByCity } from '../services/weatherApi';

function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('Ciudad no encontrada');
    }
  };

  return (
    <div className="app-container">
      <h1>Buscador de Clima</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default HomePage;

