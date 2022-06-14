import styled from 'styled-components';

export const ListArea = styled.section`
margin: 40px auto 5px;
padding: 16px;
min-height: 370px;
max-width: 320px;
background-color: #F2EEE5;
background-size: 40px 40px;
border-radius: 20px;
box-shadow: 4px 3px 7px 2px #00000040;
`;

export const Header = styled.h3`
font-family: 'Satisfy',cursive;
font-size: 35px;
`;

export const FormArea = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const AddButton = styled.button`
padding: 3px 20px;
font-size: 0.9rem;
cursor: pointer;
font-family: 'Comic Neue', cursive;
border-color: #F6AD7B;
background-color: #F2EEE5;
border-radius: 20px;
`;

export const CategoryText = styled.input`
margin-bottom: 10px;
margin-top: 10px;
width: 120px;
padding-left: 25px;
border-color: #F6AD7B;
background-color: #F2EEE5;
border-radius: 20px;
`;

export const TextArea = styled.textarea`
margin-bottom: 20px;
height: 40px;
border: 0;
border-bottom: 1px dashed black;
background-color: transparent;
font-size: 13px;
padding: 24px 41px;
`;

export const EmptyMessage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 141px;
margin-top: -105px;
font-style: oblique;
`;
