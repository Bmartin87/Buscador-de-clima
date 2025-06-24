const API_KEY = 'fa5127459ea2569e5be753a420f353c3';

export async function fetchWeatherByCity(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );
  if (!res.ok) throw new Error('Ciudad no encontrada');
  return await res.json();
}
