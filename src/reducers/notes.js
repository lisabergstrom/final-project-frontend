import { createSlice } from "@reduxjs/toolkit"

//The notes slice is in controll for updating the notes-state
//Reducers respond to actions and takes the current state and update the state based on the currebt action payload
const notes = createSlice({
    name: "notes",
    initialState: [
        {id: 1, title: "note1"},
        {id: 2, title: "note2"},
        {id: 3, title: "note3"}
    ],
    redducers: {
        addNote: (state, action) => {
            const newNote = {
                id: Date.now(),
                tite: action.payload.title,
            }
            state.push(newNote)
        }
    }
})

export const { newNote } = notes.actions

export default notes