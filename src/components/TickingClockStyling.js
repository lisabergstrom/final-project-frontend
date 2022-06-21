import styled from "styled-components/macro";

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}


export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 200px;
  margin-top: 10px;

`;

export const Timer = styled.h4`
font-size: 2rem;
line-height: 1.5rem;
font-weight: 100;
border-radius: 100px;
padding: 20px;
margin: 0;
color: #C2E8CE;
font-family: oxygen mono;
text-align: center;
border: 7px;
border-style: dotted; 

@media ${devices.tablet} {
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 200;
  padding: 30px;
}
  
@media ${devices.desktop} {
  font-size: 3.5rem;
  line-height: 2.5rem;
  padding: 40px;
}
`;

export const Label = styled.p`
  font-size: 35px;
  font-weight: 400;
  color: #F6AD7B;
  margin: 0 0 0.2rem 0;
  text-align: center;
  font-family: oxygen mono;

    @media ${devices.tablet} {
      font-size: 40px;
    }

  @media ${devices.desktop} {
  font-size: 45px;
    }

`;