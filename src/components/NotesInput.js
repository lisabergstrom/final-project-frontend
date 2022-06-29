import React, { useState } from "react"
import { useSelector } from "react-redux"

import { API_GET_NOTES } from "utils/utils"

import {
    InputContainer,
    Header,
    FormContainer,
    NoteButton,
    NoteHeading,
    NoteText,
    Select,
    Tag
} from "./NotesStyles"


const NotesInput = () => {

    const accessToken = useSelector((store) => store.user.accessToken)

    const [heading, setHeading] = useState("")
    const [message, setMessage] = useState("")
    const [tags, setTags] = useState()

    const validation = () => {
        if (message.length < 4) {
            return <p>Text must be more than 4 characters</p>
        }
    }

    const handleSubmit = (event) => {
        validation()
        event.preventDefault()
        const options = {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

                if (data.success) {
                    window.location.reload()
                }
            })
    }

    return (
        <InputContainer>
            <Header>My Travel Notes</Header>
            <FormContainer onSubmit={handleSubmit}>
                <NoteHeading
                    type="text"
                    value={heading}
                    onChange={(event) => setHeading(event.target.value)}
                    placeholder="Heading here" />
                <NoteText
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Note here"
                />
                <Select
                    defaultValue={"DEFAULT"}
                    onChange={(event) => setTags(event.target.value)}>
                    <Tag value="DEFAULT" disabled>Choose tag</Tag>
                    <Tag value="accommodation">Accommodation</Tag>
                    <Tag value="activities">Activities</Tag>
                    <Tag value="city">City</Tag>
                    <Tag value="foodndrinks">Food n Drinks</Tag>
                    <Tag value="memories">Memories</Tag>
                    <Tag value="sightseeing">Sightseeing</Tag>
                    <Tag value="travel">Travel</Tag>
                </Select>
                <NoteButton type="submit">Add note!</NoteButton>
            </FormContainer>
        </InputContainer>
    )
}

export default NotesInput