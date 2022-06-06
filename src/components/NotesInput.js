import React, { useState } from "react"
import { useDispatch } from "react-redux"

import addNote from "../reducers/notes"

const NotesInput = () => {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addNote({
            
        }))
    }

    //POST REQUEST TO MAKE NEW NOTE

    return(
        <form onSubmit={handleSubmit}>
            <h3>My Travel Notes</h3>
            <input
            type="text"
            placeholder="Heading here"/>
            <textarea
                type= "text"
                placeholder="Note here"
            />
            <select>
                <option value="Tags" selected disabled>Choose tag</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="city">City</option>
            </select>

            <button type="submit">Add note!</button>
        </form>
    )
}

export default NotesInput