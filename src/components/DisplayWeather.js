import React from "react";

import { 
  WeatherDisplay,
  MainCard,
  SubTitles,
  WeatherSections,
  WeatherDetails,
  WeatherMain,
  WeatherIcon,
  WeatherDescription,
  Temp,
  WeatherInfo,
 } from "./WeatherStyle";

const DisplayWeather = (props) => {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <WeatherDisplay>
      {data.cod !== 404 ? (
        <React.Fragment>
          <MainCard>
            <Temp>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </Temp>
            <WeatherMain>{data.weather[0].main}</WeatherMain>
            <WeatherIcon src={iconurl} alt="icon" srcSet="" />
            <WeatherDescription>
              {" "}
              {data.weather[0].description}
            </WeatherDescription>
          </MainCard>
          <WeatherDetails>
            <WeatherSections>
              <div>
                <SubTitles>High/Low</SubTitles>
                    <WeatherInfo>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </WeatherInfo>
                    <SubTitles>Humidity</SubTitles>
                    <WeatherInfo>{data.main.humidity} %</WeatherInfo>
              </div>
            </WeatherSections>
            <WeatherSections>
              <div>
                    <SubTitles>Sunrise</SubTitles>
                    <WeatherInfo>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </WeatherInfo>
                    <SubTitles>Sunset</SubTitles>
                    <WeatherInfo>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </WeatherInfo>
              </div>
            </WeatherSections>
          </WeatherDetails>
        </React.Fragment>
      ) : (
        <MainCard>
          <h2>{data.message}</h2>
        </MainCard>
      )}
    </WeatherDisplay>
  );
}

export default DisplayWeather;