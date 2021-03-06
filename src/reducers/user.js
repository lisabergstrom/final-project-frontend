import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem("user")
  ? {
    userId: JSON.parse(localStorage.getItem("user")).userId,
    username: JSON.parse(localStorage.getItem("user")).username,
    accessToken: JSON.parse(localStorage.getItem("user")).accessToken
  }
  : {
    userId: null,
    username: null,
    accessToken: null,
    error: null,
  }

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setUserName: (store, action) => {
      store.createSliceusername = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    logOut: (store, action) => {
      store.userId = null
      store.username = null
      store.accessToken = null
      localStorage.removeItem("accessToken")
    }
  },
});

export default user;
