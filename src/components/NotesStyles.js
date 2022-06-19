import styled from "styled-components"

const devices = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

/***************** NOTES INPUT *********************/

export const InputContainer = styled.div`
  background-color: #F2EEE5;
  min-width: 80vw;
  min-height: 40vh;
  padding:15px;
  margin: 20px;
  box-shadow: 3px 3px 5px 3px #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 50vw;
  }
`
export const Header = styled.h3`
  margin-top: 10px;
  font-family: 'Satisfy',cursive;
  font-size: 25px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;

  @media ${devices.tablet} {
    width: 400px;
  }
`

export const NoteHeading = styled.input `
  padding: 7px 15px;
  margin: 5px;
  border: none;
  font-size: 16px;
  border: 2px solid #BE7575;
  background-color: #F2EEE5;
`

export const NoteText = styled.textarea`
  padding: 7px 15px;
  margin: 5px;
  height: 150px;
  border: 2px solid #BE7575;
  background-color: #F2EEE5;
`
export const Select = styled.select`
  justify-content: center;
  padding: 5px 10px;
  margin: 5px 10px;
  text-align: center; 
  border: 2px solid #BE7575;
  background-color: inherit;
  border-radius: 20px;
`
export const Tag = styled.option`
  background-color:#F2EEE5; 
  color: #BE7575;
`

export const NoteButton = styled.button`
  background-color: #F6AD7B;
  padding: 3px 8px;
  margin-top: 20px;
  border: none;
  font-family: 'Comic Neue', cursive;
  border-radius: 20px;
  width: 40%;
  align-self: center;
`

/*************** NOTES LIST ***********************/

export const NotesCollection = styled.div`
  display: flex;
  flex-direction: column;
  justif-content: center;
  align-items: center;
  margin: 10px;
  padding: 15px;
  height: 60vh;
  overflow-y: scroll;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NotesHeader = styled.h2`
  font-family: 'Satisfy',cursive;
  font-size: 25px;

  @media ${devices.tablet} {
    display: none;
  }
`
export const NoteContainer = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #F2EEE5;
  box-shadow: 3px 3px 5px 3px #00000040;
  padding: 8px;
  margin: 10px 5px;
  width: 100%;
  min-height: 50vh;

  @media ${devices.tablet} {
    width: 40%;
  }
`

export const NoteHeader = styled.p`
  font-size: 20px;
  margin: 5px;
  text-align: center;
`
export const NoteMessage = styled.p`
  font-size: 18px;
  margin: 5px;
  overflow-y: auto;
  height: 220px;
`
export const NoteTag = styled.button`
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  background-color: inherit;
  text-decoration: underline;
  font-size: 16px;
  position: absolute;
  left: 15px;
  bottom: 5px;
`
export const DeleteNote = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: inherit;
  font-size: 24px;
  
`


export const EmptyCollection = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 50px 30px;
`

export const EmptyHeading = styled.h2`
  font-size: 20px;
  padding: 10px;
`

export const EmptyMessage = styled.p`
  fonst-size: 16px;
  padding: 10px;
`

