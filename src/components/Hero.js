import React from 'react';

import styled from 'styled-components';
import img from '../assets/hero.jpg';

const Content = styled.img`
  border: 1px solid #000;
  background-image: url(${img});
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 70%;

  @media (min-width: 667px) {
    height: 300px;
  }
  
  @media (min-width: 992px) { 
    height: 500px;
  }
`;

 const Text = styled.p`
    text-align: center;
    position: absolute;
    top: 20%;
    left: 65%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 35px;
    width: 50%;
    font-family: 'Satisfy', cursive;

    @media (min-width: 667px) {
        top: 30%;
        left: 60%;
        font-size: 70px;
      }
      
      @media (min-width: 992px) { 
        top: 40%;
        font-size: 100px;
      }
  `
  

const Hero = () => {
    return(
        <>
        <Content/>
        <Text>Travel Junkies</Text>
        </>
    )

}

export default Hero