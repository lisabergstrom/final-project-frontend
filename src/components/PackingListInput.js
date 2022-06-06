import React, { useState } from "react";
import { useDispatch } from "react-redux";

import addItem from "../reducers/packinglist";

const PackingListInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem({}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>My Packing List</h3>
      <input type="text" placeholder="Heading here" />
      <textarea type="text" placeholder="Item here" />
      <select>
        <option value="Tags" selected>
          Choose tag
        </option>
        <option value="clothes">Clothes</option>
        <option value="toilet bag">Toilet bag</option>
        <option value="handluggage">Hand luggage</option>
      </select>

      <button type="submit">Add an item!</button>
    </form>
  );
};

export default PackingListInput;
