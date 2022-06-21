import styled from "styled-components/macro";

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}


export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56px;
  margin-top: 10px;

  
  //  @media ${devices.tablet} {
  // }
  
 @media ${devices.desktop} {
  margin: 40px;
  height: 150px;
  }

`;

export const Timer = styled.h4`
  font-size: 3.5rem;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 0;
  color: #C2E8CE;
  font-family: oxygen mono;
  text-align: center;
  border: 7px;
  border-style: dotted; 
  border-radius: 100px;
  padding: 40px;

`;

export const Label = styled.p`
  font-size: 34px;
  font-weight: 400;
  color: #F6AD7B;
  margin: 0 0 0.2rem 0;
  text-align: center;
  font-family: oxygen mono;

  @media ${devices.desktop} {
  font-size: 55px;
    }

`;