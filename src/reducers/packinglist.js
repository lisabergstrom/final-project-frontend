/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const packinglist = createSlice({
  name: "packinglist",
  initialState: {
    items: [],
    heading: null,
    message: null,
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
    // toggleItem: (store, action) => {
    //   store.items.forEach((item) => {
    //     if(item._id === action.payload) {
    //       item.isCompleted = !item.isCompleted
    //     }
    //   })
    // }
  }
})

//add isCompleted to be able to check the packinglist

export default packinglist
