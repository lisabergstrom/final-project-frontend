/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addItem from "../reducers/packinglist";
const PackingListInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addItem({
        title: value,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>My Packing List</h3>
      <textarea type="text" placeholder="Item here" />
      <button type="submit">Add item!</button>
    </form>
  );
};
export default PackingListInput;
