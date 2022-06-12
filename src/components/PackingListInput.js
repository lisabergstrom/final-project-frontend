/* eslint-disable */
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { API_GET_LIST } from "utils/utils"


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
    <form onSubmit={handleSubmit}>
      <h3>My Packing List</h3>
      <input 
      type="text" 
      value={heading}
      onChange={(event) => setHeading(event.target.value)}
      placeholder="Category here" 
      />

      <textarea 
      type="text" 
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      placeholder="Item here" 
      />

      <button type="submit">Add an item!</button>

    </form>
  );
};

export default PackingListInput;
