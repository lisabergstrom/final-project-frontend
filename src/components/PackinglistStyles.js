import styled from 'styled-components';

export const ListArea = styled.section`
Display:flex;
flex-direction: column;
align-items: center;
margin: 40px auto 5px;
padding: 16px;
min-height: 315px;
max-width: 345px;
background-color: #F2EEE5;
background-size: 40px 40px;
border-radius: 20px;
box-shadow: 4px 3px 7px 2px #00000040;


@media (min-width: 667px) {
    max-width: 628px;
  }
 
 `;

export const Header = styled.h3`
font-family: 'Satisfy',cursive;
font-size: 35px;
margin-bottom:34px;
`;

export const FormArea = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
`;

export const AddButton = styled.button`
padding: 3px 20px;
font-size: 0.9rem;
cursor: pointer;
font-family: 'Comic Neue', cursive;
background-color: #F6AD7B;
border-radius: 20px;
margin-left: 90px;
border:none;

@media (min-width: 667px) {
    margin-left: 11px;
    margin-bottom: 19px;
  }
`;

export const CategoryText = styled.input`
width: 85px;
border: 2px solid #F6AD7B;
background-color: #F2EEE5;
padding: 0px 0 5px 11px;
margin: 0px 1px 20px 1px;
`;

export const TextArea = styled.textarea`
height: 33px;
background-color: transparent;
font-size: 13px;
padding: 0px 54px 5px 11px;
margin: 0px 1px 20px 1px;
border: 2px solid #F6AD7B;
`;

export const EmptyMessage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 141px;
margin-top: -105px;
font-style: oblique;

@media (min-width: 667px) {
    margin-bottom: 132px;
    margin-top: -105px;
  }

`;
