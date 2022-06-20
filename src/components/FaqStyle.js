import styled from 'styled-components/macro';
export const Header = styled.h3`
font-family: 'Satisfy',cursive;
font-size: 35px;
margin:30px;
text-align: center;
 `;
 export const AccordionItem = styled.div`
 background-color: #F2EEE5;
 width: 250px;
 display: flex;
 flex-direction: column;
 margin-left: 15%;
 margin-top: 5px;
 font-weight: bold;
 padding: 10px 10px 0px 10px;

  @media (min-width: 768px) {
    width: 443px;
    margin-left: 23%;
  }

  @media(min-width:1024px) {
    width:443px;
    margin-left: 32%;
  }
 `;

 export const  AccordionTitle = styled.div`
 background-color: #F2EEE5
 `;

 export const  TitleActive = styled.div`
 background-color: #F2EEE5;
 `;

 export const  AccContent = styled.div`
 background-color: #F2EEE5;
 padding: 10px;
 `;

 export const  PlusMinus = styled.div`
 font-size: 20px;
 `;
