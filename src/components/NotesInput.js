import React, { useState } from "react"
import { useSelector } from "react-redux"

import { API_GET_NOTES } from "utils/utils"



const NotesInput = () => {

    const accessToken = useSelector((store) => store.user.accessToken)

    const [heading, setHeading] = useState("")
    const [message, setMessage] = useState("")
    const [tags, setTags] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(tags)
        const options = {
            
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                'Authorization': accessToken
            },
            body: JSON.stringify({
                heading, 
                message,
                tags
            }) 
        }
    
        fetch(API_GET_NOTES, options)
        .then((res) => res.json())
        .then((data) => {

            if(data.success) {
                window.location.reload()
            }
        })
            
        }

    return(
        <form onSubmit={handleSubmit}>
            <h3>My Travel Notes</h3>
            <input
            type="text"
            value={heading}
            onChange={(event) => setHeading(event.target.value)}
            placeholder="Heading here"/>
            <textarea
                type= "text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Note here"
            />
            <select 
            defaultValue={"DEFAULT"}
            onChange={(event) => setTags(event.target.value)}>
                <option value="DEFAULT" disabled>Choose tag</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="city">City</option>
            </select>

            <button type="submit">Add note!</button>
        </form>
    )
}

export default NotesInput