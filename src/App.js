/*eslint-disable*/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "components/Login";
import Main from "components/Main";
import NotFound from "components/NotFound";
import Contact from "components/Contact";
import Notes from "components/Notes";
import Packinglist from "components/PackingList";
import Faq from "components/Faq";
import Location from "components/Location";

// import MapLocation from "./components/Map";

import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "reducers/user";

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/packinglist" element={<Packinglist />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/location" element={<Location />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
