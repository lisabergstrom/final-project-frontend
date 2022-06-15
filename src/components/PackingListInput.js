/* eslint-disable */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_LIST } from "utils/utils"

import { ListArea, Header, FormArea, AddButton, CategoryText, TextArea } from "./PackinglistStyles";

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
        message,
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
    <FormArea onSubmit={handleSubmit}>
    <TextArea 
      type="text" 
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      placeholder="Add your item here" 
      />
      
      <CategoryText
      type="text" 
      value={heading}
      onChange={(event) => setHeading(event.target.value)}
      placeholder="Tag" 
      />

      

      <AddButton type="submit">Add</AddButton>

    </FormArea>
    </ListArea>
  );
};

export default PackingListInput;
