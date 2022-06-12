/* eslint-disable */
import React from "react";
import Weather from "./Weather";
import TimeTicker from "./TickingClock";
import Footer from "./Footer";


const Main = () => {

  return (
    <>
     
       <Weather />
      <h1>Welcome!</h1>
      <TimeTicker />
       
      <Footer/>
    </>
  );
};

export default Main;
