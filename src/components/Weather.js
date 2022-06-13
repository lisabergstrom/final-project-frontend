/* eslint-disable */
import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
// import Navbar from "./Navbar";

const Weather  = () => {
 
  const APIKEY="1db7a0f6af224b79d65f2ccf40f9e740";

   const [weather, setWeather] = useState([]);
   const [form, setForm] = useState({
    city: "",
    country: "",
  });

  async function weatherData(e) {

    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
          const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">check the weather at your destination</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

   
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}


export default Weather;
