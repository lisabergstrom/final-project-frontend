import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {NoteBox} from "./NotesStyles"

import NotesInput from "./NotesInput"
import NotesList from "./NotesList"

const Notes = () => {
    return(
        <div>
             <Navbar />
             <NoteBox>
            <NotesInput/>
            <NotesList/>
            </NoteBox>
            <Footer/>
        </div>
    )
}

export default Notes