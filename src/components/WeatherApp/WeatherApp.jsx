import { useState } from 'react';
import axios from 'axios';

import {
  CityName,
  CitySearch,
  WeatherName,
  WeatherWrapper,
  DateWrapper,
  IconStyled,
  DegStyled,
  ErroreMessage,
  WindStyled,
} from './WeatherApp.styled';

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
      'November',
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
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

      await axios
        .get(baseUrl, {
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
          console.log(error.message);
        });
    }
  };

  return (
    <WeatherWrapper>
      <WeatherName>
        Weather <span> 🌤 </span>
      </WeatherName>
      <div>
        <CitySearch
          autoFocus
          type="text"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={search}
        ></CitySearch>
      </div>

      {weather.error && (
        <>
          <ErroreMessage>
            <span style={{ fontSize: '26px' }}> Sorry, City not found</span>
          </ErroreMessage>
        </>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <CityName>
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </CityName>
          <DateWrapper>
            <span>{toDate()}</span>
          </DateWrapper>
          <IconStyled>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <DegStyled> &deg;C </DegStyled>
          </IconStyled>
          <WindStyled>
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </WindStyled>
        </div>
      )}
    </WeatherWrapper>
  );
}

export default Weather;
