import React from "react";
import "./Result.css";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h3>
          Search results for: <em>{city.toUpperCase()}</em>
        </h3>
        <h4>
          Data for day and time: <strong>{date}</strong>
        </h4>
        <h4>
          Current temperature: <strong>{temp}</strong> &#176;C
        </h4>
        <h4>
          Sunrise today at <strong>{sunriseTime}</strong>
        </h4>
        <h4>
          Sunset today at <strong>{sunsetTime}</strong>
        </h4>
        <h4>
          Current wind force <strong>{wind}</strong> m/s
        </h4>
        <h4>
          Current pressure <strong>{pressure}</strong> hPa
        </h4>
      </>
    );
  }

  return (
    <div className="result">
      {err ? `We do not have in base ${city}` : content}
    </div>
  );
};

export default Result;
