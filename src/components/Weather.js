import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

import { 
  WeatherWrapper,
  WeatherForm,
  WeatherTitle,
  SubmitButton,
  Input,
 } from "./WeatherStyle";

const dotenv = require("dotenv");

dotenv.config({ path: ".env" });


const Weather  = () => {
 
 const APIKEY = process.env.REACT_APP_API_KEY

   const [weather, setWeather] = useState([]);
   const [form, setForm] = useState({
    city: "",
    country: "",
  });

  async function weatherData(e) {

    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
          const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <WeatherWrapper>
      <WeatherTitle>Check the weather at your destination</WeatherTitle>
      <br />
      <WeatherForm>
        <Input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <Input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <SubmitButton onClick={(e) => weatherData(e)}>
          Check
        </SubmitButton>
      </WeatherForm>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </WeatherWrapper>
  );
}


export default Weather;