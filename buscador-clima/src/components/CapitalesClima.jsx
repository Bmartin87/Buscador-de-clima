
import React, { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../services/weatherApi';

const ciudades = ['Buenos Aires', 'Londres', 'Roma', 'Washington'];

const CapitalesClima = ({ onSelect }) => {
  const [climas, setClimas] = useState([]);

  useEffect(() => {
    const obtenerClimas = async () => {
      const resultados = await Promise.all(
        ciudades.map(async (ciudad) => {
          const data = await fetchWeatherByCity(ciudad);
          return {
            name: data.name,
            temp: Math.round(data.main.temp),
            icon: data.weather[0].icon,
            description: data.weather[0].description,
          };
        })
      );
      setClimas(resultados);
    };

    obtenerClimas();
  }, []);

  return (
    <div className="sidebar-climas">
      <h3>🌍 Capitales del mundo</h3>
      <ul>
        {climas.map((c, i) => (
          <li
            key={i}
            className="mini-card"
            onClick={() => onSelect(c.name)}
            style={{ cursor: 'pointer' }}
          >
            <h4>{c.name}</h4>
            <p>{c.temp}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${c.icon}.png`}
              alt={c.description}
              title={c.description}
            />
            <p className="estado">{c.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapitalesClima;
