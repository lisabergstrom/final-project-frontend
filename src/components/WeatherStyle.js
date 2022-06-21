import styled from "styled-components";

const devices = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
  }


export const WeatherWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
border: 1px solid black;
border-radius: 10px;
margin: 30px;

`

export const WeatherForm = styled.form`
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 10px;
margin: 20px;

@media ${devices.tablet} {
    padding: 25px;
}


@media ${devices.desktop} {
    padding: 40px;
   }
`

export const WeatherTitle = styled.span`
font-size: 1.5rem;
text-align: center;
padding: 10px;

@media ${devices.tablet} {
    font-size: 2rem;
  }

@media ${devices.desktop} {
    font-size: 3rem;
  }
`

export const Input = styled.input`
width: 250px;
height: 50px;
color: #000;
margin: 5px;

@media ${devices.tablet} {
    margin: 20px;
  }

@media ${devices.desktop} {
    width: 280px;
    height: 60px;
  }

`

export const SubmitButton = styled.button`
background-color: #F2EEE5;
color: #BE7575;
padding: 10px;
border-radius: 10px;
margin: 20px;

@media ${devices.tablet} {
    margin: 10px;
    width: 80px;
  }

@media ${devices.desktop} {
    margin:0 0 0 20px;
    width: 100px;
  }
`


export const WeatherDisplay = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

// @media ${devices.tablet} {
  
//   }

// @media ${devices.desktop} {
  
//   }

`

export const MainCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;

// @media ${devices.tablet} {
    // }
    
    @media ${devices.desktop} {
      flex-direction: row;
    }
  

`

export const SubTitles = styled.h4`
font-size: 1.5rem;
text-align: center;
color: #BE7575;

@media ${devices.desktop} {
    font-size: 2.5rem;
   }

`

export const WeatherSections = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding: 10px;

@media ${devices.desktop} {
    margin: 30px;
  }

`

export const WeatherDetails = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

@media ${devices.desktop} {
    flex-direction: row;
    padding: 30px;
  }

`

export const WeatherMain = styled.span`
font-size: 2.5rem;
color: #F6AD7B;
text-align: center;

// @media ${devices.tablet} {
 
//   }

@media ${devices.desktop} {
    font-size: 3rem;
  }

`

export const WeatherIcon = styled.img`
height: 100px;
width: 100px;
align-self: center;

@media ${devices.desktop} {
    height: 150px;
    width: 150px;
  }

`

export const WeatherDescription = styled.span`
font-size: 2rem;
text-align: center;
padding: 10px;
`

export const Temp = styled.h1`
font-size: 4rem;
text-align: center;

@media ${devices.desktop} {
   font-size: 5rem;
  }

`

export const WeatherInfo = styled.span`
font-size: 1rem;

@media ${devices.desktop} {
    font-size: 2rem;
   }
`

