/* eslint-disable */
import React, {useState} from "react";
import Weather from "./Weather";
import TimeTicker from "./TickingClock";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import hat from "../assets/hat.jpg"
import city from "../assets/city.jpg"
import dream from "../assets/dream.jpg"
import nature from "../assets/nature.jpg"


import '../app.css';
import { ThemeContext, themes } from './ThemeContext';
import ToggleDark from './DarkMode';


const Contentcontainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;


  @media (min-width: 667px) {
    height: 300px;
  }
  
  @media (min-width: 992px) { 
    height: 500px;
  }
`;

const Imagebox = styled.div`
 display:flex;
 flex-direction: column;
 justify-contente: center;
 align-items: center;
 background-color: white;

 &:nth-child(2n) {
  background-color: #f4f4f4;
  }


 @media (min-width: 667px) {
  flex-direction: row;
  justify-content: space-around;
}

@media (min-width: 992px) { 
  flex-direction: row;
  justify-content: space-around;
}

`;

const Images = styled.img`
height:200px;
width:200px; 
padding:20px;
box-shadow: 4px 3px 7px 2px #00000040;
`

const Main = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <>
       <Header/>
      <Contentcontainer>
      <Weather />
      <TimeTicker />
      </Contentcontainer>
      <h1 className="text-warning">Dark/Light mode</h1>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>
      <Imagebox>
      <Images src={hat} alt="Hat image" />
      </Imagebox>
      <Imagebox>
      <Images src={city} alt="Hat image" />
      </Imagebox>
      <Imagebox>
      <Images src={dream} alt="Hat image" />
      </Imagebox>
      <Imagebox>
      <Images src={nature} alt="Hat image" />
      </Imagebox>
      <Footer/>
    </>
  );
};

export default Main;
