import styled from "styled-components/macro"

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

export const ContactConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  padding: 8px;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ContactHeading = styled.h1`
  font-size: 25px;
  font-family: 'Satisfy',cursive;
  margin-top: 25px;
  text-align: center;

  @media ${devices.tablet} {
    font-size: 30px;
  }

  @media ${devices.desktop} {
    font-size: 32px;
  }
`
export const ContactBox = styled.div`
  background-color: #F2EEE5;
  box-shadow: 3px 3px 5px 3px #00000040;
  padding: 10px;
  margin: 10px 30px;
  width: 85%;

  @media ${devices.tablet} {
    margin: 8px;
    height: 60vh;
  }
`

export const Contributors = styled.h3`
  font-family: 'Satisfy',cursive;
  font-size: 20px;
  text-align: center;
  margin-top: 8px;
`
export const Description = styled.p`
  text-align: center;
  font-size: 16px;
`
export const LinkContainer = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactLinks = styled.a`
  text-decoration: none;
  color: #BE7575;
  padding: 3px;
  font-size: 14px;
  font-weight: bold;
`

export const ContactImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #FFF;
  object-fit: cover;
`