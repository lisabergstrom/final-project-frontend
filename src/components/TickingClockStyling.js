import styled from "styled-components";


export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56px;
  border-right: 2px solid #BE7575;
  padding-right: 2rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
}
`;

export const Timer = styled.h4`
  font-size: 3.5rem;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 0;
  color: #C2E8CE;
  font-family: oxygen mono;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export const Label = styled.p`
  font-size: 34px;
  font-weight: 400;
  color: #F6AD7B;
  margin: 0 0 0.2rem 0;
  text-align: right;
  font-family: oxygen mono;

  @media (max-width: 767px) {
    text-align: left;
  }
`;