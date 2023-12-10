import React, { useState } from "react";
import "./WeatherApp.css";

import Search_icon from "../Assets/search.png";
import Humidity_icon from "../Assets/humidity.png";
import Wind_icon from "../Assets/wind.png";

import Clear_icon from "../Assets/clear.png";
import Cloud_icon from "../Assets/cloud.png";
import Drizzle_icon from "../Assets/drizzle.png";
import Rain_icon from "../Assets/rain.png";
import Snow_icon from "../Assets/snow.png";

  // OpenWeatherMap data api fetch code
  const WeatherApp = () => {
  // Image Chaging Variable Code :-
  const [weatherIcon, setWeatherIcon] = useState(Cloud_icon);

  let api_key = "820b8bd02ba89151b65f9c5a769b24d5";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    // ClassName Code :-
    const humidity = document.getElementsByClassName("humidity-percentage");

    const wind = document.getElementsByClassName("wind-rate");

    const temperature = document.getElementsByClassName("weather-temp");

    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(Clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(Cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(Drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(Drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(Rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(Rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(Snow_icon);
    } else {
      setWeatherIcon(Clear_icon);
    }
  };

  return (
    <div className="container">
      <h1 className="title">*WEATHER APP*</h1>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={Search_icon} alt="" />
        </div>
      </div>

      <div className="all-data">
          <div className="weather-image">
            <img src={weatherIcon} alt="" />
          </div>
          <div className="weather-temp">0°C</div>

          <div className="weather-location"></div>

          <div className="data-container">
            <div className="element">
              <img src={Humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percentage">0%</div>
                <div className="text">Humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={Wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">0 km/hr</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WeatherApp;
