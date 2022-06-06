import React, { useState, useEffect } from "react"

import { API_GET_NOTES } from "utils/utils"
import Notes from "./Notes"


const NotesList = () => {
    const [noteList, setNoteList] = useState()

    useEffect(() => {
        fetchNotes()
    }, [])


    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'fc7eb897efa0a33e98cd863be9082b5340a1e247b4d9dd47280c5dd52244a9384b2f1e987a77563ac0365b2d2dd67a5c37d526ea7d300289288e80392cea1b4723cb49ebef3e1033ae0eaf9bb202652774f3318d81d00b5b0b2948e0ee4b3d4dc54e26611af301d2dea9bbc781deb0a101aee9bb232f00f9ca4083fa71b668ef'
        }
    }

  const fetchNotes = () => {
    fetch(API_GET_NOTES, options)
    .then((res) => res.json() )
    .then((data) => {console.log(data);setNoteList(data)})
    
  }

fetchNotes()
//   return (
//       <div>
//           {noteList.map((data) => (
//               <div>
//                 <div>key={data._id}</div>
//                 <h3>{data.header}</h3>
//                 <p>{data.message}</p>
//                 <p>{data.tags}</p>
//               </div>
//           ))}

//       </div>
      
//   )
   

}

export default NotesList