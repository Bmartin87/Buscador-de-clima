export async function fetchWeatherByCity(city) {
    
  
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`
    );
  
    if (!res.ok) throw new Error('Ciudad no encontrada');
    return await res.json();
  }
  