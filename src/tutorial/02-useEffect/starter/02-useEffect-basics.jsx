import { useState, useEffect } from 'react'

// const UseEffectBasics = () => {
//   const [value, setValue] = useState(0)
//   const sayHello = () => {
//     console.log('hello there')
//   }

//   sayHello()

//   // useEffect(() => {
//   //   console.log('hello from useEffect');
//   // });

//   useEffect(() => {
//     console.log('hello from useEffect')
//   }, [])

//   const promise = new Promise((resolve, reject) => {
//     resolve ()
//   })

//   return (
//     <div>
//       <h1>value : {value}</h1>
//       <button className="btn" onClick={() => setValue(value + 1)}>
//         click me
//       </button>
//     </div>
//   )
// }

const Starter = () => {
  // State to hold user input, weather data, and loading/error status
  const [city, setCity] = useState('New York') // Default city
  const [weather, setWeather] = useState(null) // Weather data
  const [loading, setLoading] = useState(false) // Loading state
  const [error, setError] = useState(null) // Error state

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    setLoading(true) // Start loading
    setError(null) // Clear any previous errors
    try {
      const apiKey = 'your_api_key' // Replace with your API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      )

      if (!response.ok) {
        throw new Error('City not found or API limit exceeded.')
      }

      const data = await response.json()
      setWeather(data) // Update weather data
    } catch (err) {
      setError(err.message) // Set error message
    } finally {
      setLoading(false) // Stop loading
    }
  }

  // useEffect to fetch weather when the component mounts or city changes
  useEffect(() => {
    fetchWeather(city)
  }, [city])

  // Render the component
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '400px' }}>
      <h1>Weather App</h1>
      <div>
        <label htmlFor="city">Enter city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g., London"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && !loading && !error && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Starter
