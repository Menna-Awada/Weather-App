import LoadingSkelton from './components/LoadingSkeleton'
import { useState } from 'react'
import './App.css'

function App() {
  const[city, setCity]=useState("")
  const[weather, setWeather]=useState(null)
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)
  const API_KEY =import.meta.env.VITE_WEATHER_API_KEY;
const fetchWeather= async()=>{
  if(!city){
    return;
  }
  setLoading(true);
  setError(null)
  try {
    const response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`);
    if(!response.ok){
      setError ("City not found or API error ")
    }
    const data = await response.json();
      console.log(data);
      setWeather(data);
      setLoading(false);
  } catch (error) {
    setError(error.message)
    setWeather(null)
    setLoading(false)
  }

}
const getLocation = async () => {
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser");
    return;
  }
const data = await response.json();
  setLoading(true);
  setError(null);
  setWeather(null);

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=3`
        );

        if (!response.ok) {
          throw new Error("Unable to get weather for your location");
        }

        const data = await response.json();
        setWeather(data);
        setLoading(false);

      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },

    (error) => {
      setError(error.message);
      setLoading(false);
    }
  );
};
  return (
    <div className='content'>
      <div className='container'>
    <h1 className='heading'>Weather App</h1>
    <div className='forming'>
    <input className='name' type="text" placeholder='Enter City name' onChange={(e) => setCity(e.target.value)} />
    <button className='search' onClick={fetchWeather} disabled={loading}> Get Weather</button>
    </div>
    <button className='current' onClick={getLocation} disabled={loading}>Get Current Location Weather</button>
    {error && <p style={{color:"red", fontWeight:"bold"}}>{error}</p>}
    {loading? (<LoadingSkelton/>
    ) :(weather && !error &&(
      <div>
      <div className='info'>
        <h2 className='title'>{weather.location.name}, {weather.location.country}</h2>
        <p className='icon'>
          <img className='img' src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text}/>
          {weather.current.condition.text}
        </p>
        <p>
          Temp: <span className='temp'>{weather.current.temp_c}</span>C / <span>{weather.current.temp_f}</span>F
        </p>
        <p>Humidity <span>{weather.current.humidity}</span></p>
        <p>Wind: <span>{weather.current.wind_kph}</span> kph</p>
      </div>
    <h3 className='forecast'>3-Days Forecast</h3>
    <div className='grid'>
      {weather.forecast.forecastday.map((day) =>(
        <div key={day.date} className='day'>
          <p className='date'>{day.date}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>{day.day.condition.text}</p>
          <p>
            High: {" "}
            <span className='span'>{day.day.maxtemp_c}C</span>
            /{" "}
            <span className='span'>{day.day.maxtemp_f}F</span>
          </p>
          <p>
            Low: {" "}
            <span className='span'>{day.day.mintemp_c}C</span>
            /{" "}
            <span className='span'>{day.day.mintemp_f}F</span>
          </p>
          <p>Humidity: {day.day.avghumidity}%</p>
        </div>
      ))}
    </div>
    </div>
    ) 
   )}
    </div>
    </div>
  )
}

export default App
