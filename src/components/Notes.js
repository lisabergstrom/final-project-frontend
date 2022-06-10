import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import NotesInput from "./NotesInput"
import NotesList from "./NotesList"

const Notes = () => {
    return(
        <div>
             <Navbar />
            <NotesInput/>
            <NotesList/>
            <Footer/>
        </div>
    )
}

export default Notes