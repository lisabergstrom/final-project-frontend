import { createSlice } from "@reduxjs/toolkit"

//The notes slice is in controll for updating the notes-state
//Reducers respond to actions and takes the current state and update the state based on the currebt action payload
const notes = createSlice({
    name: "notes",
    initialState: {
       items: [], 
       heading: null,
       message: null,
       error: null
    },
    reducers: {
        setNotes: (store, action) => {
                store.items = action.payload
        },
        setErrors: (store, action) => {
            store.error = action.payload
        }, 
        deleteNotes: (store, action) => {
            const eraseNote = store.items.filter((note) => note._id !== action.payload)
            store.items = eraseNote
            
        }
    }
})

export default notes