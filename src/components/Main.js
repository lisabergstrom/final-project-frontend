/* eslint-disable */
import React, {useState} from "react";
import TimeTicker from "./TickingClock";
import Footer from "./Footer";
import Header from "./Header";
import hat from "../assets/hat.jpg"
import city from "../assets/city.jpg"
import dream from "../assets/dream.jpg"
import nature from "../assets/nature.jpg"

import {Contentcontainer, Clockbox, Imagebox, Images, Quotes, ImageContainer, TextContent} from "./MainStyles"
import Weather from "./Weather";


const Main = () => {


  return (
      <>
       <Header/>
      <Contentcontainer>
        <Clockbox>
      <TimeTicker />
      </Clockbox>
        <Weather/>
      </Contentcontainer>
      <ImageContainer>
      <Imagebox>
      <Images src={hat} alt="Hat image" />
      <TextContent>
      <Quotes>“Travel is the only thing you buy that makes you richer” - Anonymous</Quotes>
      </TextContent>
      </Imagebox>
     
      <Imagebox>
      <Images src={city} alt="Hat image" />
      <TextContent>
      <Quotes>“Oh the places you will go” - Dr. Seuss</Quotes>
      </TextContent>
      </Imagebox>
     
      <Imagebox>
      <Images src={dream} alt="Hat image" />
      <TextContent>
      <Quotes>“It feels good to be lost in the right direction” - Unknown</Quotes>
      </TextContent>
      </Imagebox>
     
      <Imagebox>
      <Images src={nature} alt="Hat image" />
      <TextContent>
      <Quotes>A journey of a thousand miles begins with a single step” - Lao Tzu</Quotes>
      </TextContent>
      </Imagebox>
      
      </ImageContainer>
      <Footer/>
    
      </>
    
  );
};

export default Main;
