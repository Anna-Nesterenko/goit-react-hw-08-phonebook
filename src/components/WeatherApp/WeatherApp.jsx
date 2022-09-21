import { useState } from 'react';
import axios from 'axios';
import css from './WeatherApp.module.css';

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather });
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

      await axios
        .get(url, {
          params: {
            q: query,
            units: 'metric',
            appid: apiKey,
          },
        })
        .then(res => {
          setWeather({ data: res.data, error: false });
        })
        .catch(error => {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log('error', error.message);
        });
    }
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.weather_name}>
        Weather App <span> 🌤 </span>
      </h1>
      <div className={css.search_bar}>
        <input
          autoFocus
          type="text"
          className={css.city_search}
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {weather.error && (
        <>
          <span className={css.error_message}>
            <span style={{ fontSize: '26px' }}> Sorry, City not found</span>
          </span>
        </>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <div className={css.city_name}>
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div className={css.date}>
            <span>{toDate()}</span>
          </div>
          <div className={css.icon_temp}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <span className={css.deg}>&deg;C</span>
          </div>
          <div className={css.des_wind}>
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
