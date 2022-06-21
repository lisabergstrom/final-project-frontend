import styled from 'styled-components/macro'

import img from '../assets/hero.jpg';

const devices = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
  }
  
  export const Content = styled.img`
    border: 1px solid #000;
    background-image: url(${img});
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position-y: 70%;
  
    @media ${devices.tablet} {
      height: 300px;
    }
  
    
    @media ${devices.desktop}{ 
      height: 500px;
    }
  `;
  
   export const Text = styled.p`
      text-align: center;
      position: absolute;
      top: 20%;
      left: 65%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-shadow: 3px 3px #212529;
      font-size: 35px;
      width: 50%;
      font-family: 'Satisfy', cursive;
  
      @media ${devices.tablet} {
          top: 30%;
          left: 60%;
          font-size: 70px;
        }
        
        @media ${devices.desktop} { 
          top: 40%;
          font-size: 100px;
        }
    `