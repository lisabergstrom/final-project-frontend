import React from 'react';
import styled from 'styled-components';


 const Wrapper = styled.div` 
    position: absolute;
    background: #2b3e51;
    width: 100%;
    height: 50%;
    overflow-y: scroll;
    `

 const Label = styled.label`
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 50px;
      `

 const Input = styled.input`
        display: none;
        & before
        input:checked{
            transform: translateX(70px);
          }
          &after
          input:checked {
            transform: translateX(70px);
          }
      `


const Switch = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e74a42;
    transition: all 1.4s;
    border-radius: 50px;
    z-index: 100;
    overflow: hidden;
    &:before,
    &:after {
      position: absolute;
      content: "";
      height: 40px;
      width: 40px;
      left: 5px;
      bottom: 5px;
      border-radius: 30px;
      background-color: #fff;
    }
    &:before {
      transition: 0.4s;
    }
    &:after {
      transition: 0.5s;

    }
`;



const ToggleDark = (props) => {
  return (
    <div>
      <Wrapper>
        <Label >
          <Input
            type="checkbox"
            id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}
          />
            <Switch>slide</Switch>
        </Label>
      </Wrapper>
    </div>
  );
}

export default ToggleDark;