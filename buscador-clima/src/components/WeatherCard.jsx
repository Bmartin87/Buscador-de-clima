function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>🌡️ Temperatura: {main.temp}°C</p>
      <p>💧 Humedad: {main.humidity}%</p>
      <p>🌬️ Viento: {wind.speed} m/s</p>
      <p>☁️ Estado: {weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <br />
      <a
        href={`https://www.windguru.cz/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Windguru
      </a>
    </div>
  );
}

export default WeatherCard;
