import styled from "styled-components"

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
  padding: 5px 10px;
  margin: 5px 10px;
  text-align: center; 
  border: 0;
  background-color: #FFF;
  width: 80%;
  font-size: 10px;
`
export const CustomSelect = styled.div`
  position: relative;
  
`

export const CustomArrow = styled.div`
  background-color: red;
  position: absolute;
  top: 8px;
  right: 50px;
  display: block;
  height: 100%;
  width: 4rem;
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
`

/*************** NOTES LIST ***********************/

export const NotesCollection = styled.div`
  display: flex;
  flex-direction: column;
  justif-content: center;
  align-items: center;
  margin: 10px;
  padding: 15px;
`
export const NotesHeader = styled.h2`
  font-family: 'Satisfy',cursive;
  font-size: 25px;
`
export const NoteContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: #F2EEE5;
  box-shadow: 3px 3px 5px 3px #00000040;
  padding: 8px;
  margin: 10px 5px;
  width: 100%;
`

export const NoteHeader = styled.p`
  font-size: 20px;
  margin: 5px;
  text-align: center;
`
export const NoteMessage = styled.p`
  font-size: 18px;
  margin: 5px;
`
export const NoteTag = styled.button`
  border: none;
  border-radius: 50px;
  padding: 8px;
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 16px;
  background-color: #BE7575;
  color: #F2EEE5;
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

