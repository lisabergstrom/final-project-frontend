/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const packinglist = createSlice({
  name: "item",
  initialState: [
    { id: 1, title: "item1" },
    { id: 2, title: "item2" },
    { id: 3, title: "item3" },
  ],
  redducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        tite: action.payload.title,
      };
      state.push(newItem);
    },
  },
});

export const { newItem } = packinglist.actions;

export default packinglist;
