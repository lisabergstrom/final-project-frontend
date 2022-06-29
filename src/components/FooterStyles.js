import styled from 'styled-components/macro'

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

export const Box = styled.div`
  height: 50px;
`

export const FooterText = styled.h4`
  color: white;
  text-align: center;
  font-size: 14px;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #212529;
  margin:0;
  padding: 8px;
  display:flex;
  justify-content: center;

  @media ${devices.tablet} {
    font-size: 18px;
  }
`