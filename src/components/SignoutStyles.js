import styled from "styled-components/macro";

const devices = {
    tablet: '(min-width: 668px)',
    desktop: '(min-width: 1024px)'
  }


export const SignOut = styled.button`
padding: 3px 16px;
cursor: pointer;
font-family: 'Comic Neue',cursive;
background-color: #C2E8CE;
border-radius: 20px;
border: none;
font-size: 10px;

@media ${devices.tablet} {
  padding: 8px 22px;
    font-size: 14px;
    margin-left: 49px;
}

@media ${devices.desktop} {
  font-size: 14px;
  margin-left: 54px;
  }

`