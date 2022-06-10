import React from "react"
import Navbar from "./Navbar"

import NotesInput from "./NotesInput"
import NotesList from "./NotesList"

const Notes = () => {
    return(
        <div>
             <Navbar />
            <NotesInput/>
            <NotesList/>
        </div>
    )
}

export default Notes