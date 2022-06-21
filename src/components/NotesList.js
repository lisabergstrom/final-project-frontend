import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { API_GET_NOTES, API_DELETE_NOTES } from "utils/utils"

import { 
  NotesCollection, 
  NotesHeader, 
  NoteContainer, 
  NoteHeader, 
  NoteMessage,
  TagContainer, 
  NoteTag, 
  DeleteNote, 
  EmptyCollection, 
  EmptyHeading, 
  EmptyMessage 
} from "./NotesStyles"

import notes from "../reducers/notes"


const NotesList = () => {
  const noteItems = useSelector((store) => store.notes.items)

  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': accessToken
      }
    }

    fetch(API_GET_NOTES, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(notes.actions.setNotes(data))
          dispatch(notes.actions.setErrors(null))
        } else {
          dispatch(notes.actions.setNotes([]))
          dispatch(notes.actions.setErrors(data))
        }
      })
  }, [accessToken, userId, dispatch])

  const deleteNote = (notesId) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': accessToken
      },
      body: JSON.stringify({ user: userId, })
    }


    fetch(API_DELETE_NOTES(notesId), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data) {
          dispatch(notes.actions.deleteNotes(notesId))
          dispatch(notes.actions.setErrors(null))
        } else {
          dispatch(notes.actions.setNotes([]))
          dispatch(notes.actions.setErrors(data.response))
        }
      })
  }

  if (noteItems.length > 0)
    return (
      <NotesCollection>
        <NotesHeader >My travel memories</NotesHeader>
        {noteItems &&
          noteItems.map((item) => (
            <NoteContainer key={item._id}>
              <div >
                <NoteHeader>{item.heading}</NoteHeader>
                <NoteMessage>{item.message}</NoteMessage>
              </div>
              <TagContainer>
              <NoteTag>{item.tags}</NoteTag>
              </TagContainer>
              <DeleteNote onClick={() => deleteNote(item._id)}>
              <span role='img' aria-label='delete'>🗑</span>
              </DeleteNote>
            </NoteContainer>
          ))}
      </NotesCollection>
    )
  return (
    <EmptyCollection>
      <EmptyHeading>Collect your travel memories</EmptyHeading>
      <EmptyMessage>You have no memories saved yet, start creeating your travel memories now so you do not forgett them</EmptyMessage>
    </EmptyCollection>
  )
}

export default NotesList