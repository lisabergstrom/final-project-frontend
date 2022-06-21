import styled from "styled-components/macro"

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

export const Contentcontainer = styled.div`
  width: 100%;
  background-color: #F2EEE5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // @media ${devices.tablet} {
  // }
  
  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const ImageContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin: 25px 10px 20px;

@media ${devices.tablet} {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media ${devices.desktop} {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

`
export const Imagebox = styled.div`
 margin: 5px;
 display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
`

export const Images = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  box-shadow: 4px 3px 7px 2px #00000040;
  background-color: #FFF;

  @media ${devices.tablet} {
    width: 300px;
    height: 300px;
    padding: 15px;
  }

  @media ${devices.desktop} {
    width: 380px;
    height: 380px;
    padding: 20px;
  }
`

export const TextContent = styled.div`
  text-align: center;
  padding: 10px 20px;
  width: 280px;
  height: 100px;

  @media ${devices.tablet} {
    width: 310px;
    margin: 15px;
  }

  @media ${devices.desktop} {
    width: 350px;
    margin: 20px;
  }
  
`

export const Quotes = styled.p`
  font-size: 16px;

  @media ${devices.tablet} {
    font-size: 20px
  }

  @media ${devices.tablet} {
    font-size: 24px
  }
`