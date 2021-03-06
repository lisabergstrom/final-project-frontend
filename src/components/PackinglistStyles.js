import styled from 'styled-components/macro';

const devices = {
  tablet: '(min-width: 668px)',
  desktop: '(min-width: 1024px)'
}

export const ListArea = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto 5px;
  padding: 16px;
  max-width: 345px;
  background-color: #F2EEE5;
  background-size: 40px 40px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;

  @media ${devices.tablet}{
    max-width: 628px;
  }
 `

export const Header = styled.h3`
  font-family: 'Satisfy',cursive;
  font-size: 35px;
  margin-bottom:34px;
`

export const Content = styled.h3`
  font-size: 16px;
  margin-bottom:34px;
`

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AddButton = styled.button`
  padding: 3px 20px;
  font-size: 0.9rem;
  font-family: 'Comic Neue', cursive;
  background-color: #F6AD7B;
  border-radius: 20px;
  border:none;

  @media ${devices.desktop} {
    cursor: pointer;
  }
`
export const HeaderText = styled.input`
  width: 100%;
  border: 2px solid #F6AD7B;
  background-color: #F2EEE5;
  padding: 0px 0 5px 11px;
  margin: 0px 1px 20px 1px;
`

export const TextArea = styled.textarea`
  height: 10vh;
  background-color: transparent;
  font-size: 13px;
  padding: 0px 54px 5px 11px;
  margin: 0px 1px 20px 1px;
  border: 2px solid #F6AD7B;
  font-size: 16px;

  @media ${devices.tablet} {
    height: 10vh;
  }
`

export const EmptyMessage = styled.div`
  font-style: oblique;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 30px;
`

export const AnswerArea = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 40px auto 5px;
  padding: 16px;
  min-height: 160px;
  max-width: 345px;
  background-color: #F2EEE5;
  background-size: 40px 40px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;

  @media ${devices.tablet} {
    max-width: 628px;
}
`
export const AnswerP = styled.p`
  font-size: 16px;
`

export const AnswerHeader = styled.p`
  font-family: 'Satisfy',cursive;
  font-size:20px
`

export const AnswerText = styled.div`
  font-family: 'Satisfy',cursive;
`
export const IsPacked = styled.input`
  position: absolute;
  top: 20px;
  right: 60px;
  width: 20px;
  height: 20px;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: inherit;
  font-size: 20px; 
`