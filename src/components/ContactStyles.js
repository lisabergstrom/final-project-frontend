import styled from "styled-components"

export const ContactConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  padding: 8px;
`

export const ContactHeading = styled.h1`
  font-size: 25px;
  font-family: 'Satisfy',cursive;
  margin-top: 25px;
`
export const ContactBox = styled.div`
  
  background-color: #F2EEE5;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 3px #00000040;
  padding: 10px;
  margin: 10px 30px;
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
`