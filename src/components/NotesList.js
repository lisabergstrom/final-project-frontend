import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { API_GET_NOTES, API_DELETE_NOTES } from "utils/utils"
import { EmptyCollection, EmptyHeading, EmptyMessage } from "./NotesStyles"

import notes from "../reducers/notes"



const NotesList = () => {
  //Initial state
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
      <div>
        <h2>My travel memories</h2>
        {noteItems &&
          noteItems.map((item) => (
            <div>
              <div key={item._id}>
                <p>{item.heading}</p>
                <p>{item.message}</p>
                <button>{item.tags}</button>
              </div>
              <button onClick={() => deleteNote(item._id)}>Delete</button>
            </div>
          ))}



      </div>
    )
  return (
    <EmptyCollection>
      <EmptyHeading>Collect your travel memories</EmptyHeading>
      <EmptyMessage>You have no memories saved yet, start creeating your travel memories now so you do not forgett them</EmptyMessage>
    </EmptyCollection>
  )


}

export default NotesList