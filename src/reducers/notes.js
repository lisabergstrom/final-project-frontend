import { createSlice } from "@reduxjs/toolkit"


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