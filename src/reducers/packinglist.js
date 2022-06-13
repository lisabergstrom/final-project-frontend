/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const packinglist = createSlice({
  name: "packinglist",
  initialState: {
    items: [],
    heading: null,
    message: null,
    isCompleted: false,
    error: null
  },
  reducers: {
    setListItem: (store, action) => {
      store.items = action.payload
    },
    setErrors: (store, action) => {
      store.error = action.payload
    },
    deleteListItem: (store, action) => {
      const eraseListItem = store.items.filter((item) => item._id !== action.payload)
      store.items = eraseListItem
    }, 
    toggleItem: (store, action) => {
      const checkedItem = store.items.find((item) => item._id === action.payload)
      checkedItem.isCompleted = !checkedItem.isCompleted
    }
  }
})

//add isCompleted to be able to check the packinglist

export default packinglist
