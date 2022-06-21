import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_LIST } from "utils/utils"

import { 
  ListArea, 
  Header, 
  FormArea, 
  AddButton, 
  HeaderText, 
  TextArea, 
  Content 
} from "./PackinglistStyles";


const PackingListInput = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const [heading, setHeading] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        'Authorization': accessToken
      },
      body: JSON.stringify({
        heading,
        message
      })
    }
    fetch(API_GET_LIST, options)
    .then((res) => res.json())
    .then((data) => {
      if(data.success) {
        window.location.reload()
      }
    })
  }

  return (
    <ListArea>
           <Header>My Packing List</Header>
           <Content>Check it off your list so you can relax and enjoy that vacy!</Content>
    <FormArea onSubmit={handleSubmit}>
    <HeaderText
      type="text"
      value={heading}
      onChange={(event) => setHeading(event.target.value)}
      placeholder="Header"
      />
<TextArea
      type="text"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      placeholder="Add your item here"
      />
      <AddButton type="submit">Add</AddButton>
    </FormArea>
    </ListArea>
  );
};

export default PackingListInput;
