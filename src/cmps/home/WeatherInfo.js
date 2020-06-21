import React from 'react';

export default function WeatherInfo({ editFavorites, location, weather }) {

    const image = require(`../../assets/icons/${weather.WeatherIcon}.png`);
    return (
        <div className="flex column align-center weather-info-container">
            <img className="weather-icon" src={image} alt={weather.WeatherText} />
            <div className="field city-name">{location.LocalizedName}</div>
            <div className="field temperature">{weather.Temperature.Metric.Value} {weather.Temperature.Metric.Unit}</div>
            <div className="field weather-text">{weather.WeatherText}</div>
            <div className="btn edit" onClick={() => editFavorites(location)}>like</div>
        </div>
    )
}