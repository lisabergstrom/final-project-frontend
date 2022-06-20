/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import { useContext } from "react";
// import { ThemeContext } from "./components/Theme";

import Login from "components/Login";
import Main from "components/Main";
import NotFound from "components/NotFound";
import Contact from "components/Contact";
import Notes from "components/Notes";
import Faq from "components/Faq";
import Location from "components/Location";
import Weather from "components/Weather";
import PackingList from "components/PackingList";

import user from "reducers/user";
import notes from  "reducers/notes"
import packinglist from "reducers/packinglist"


const reducer = combineReducers({
  user: user.reducer,
  notes: notes.reducer,
  packinglist: packinglist.reducer
});

const store = configureStore({ reducer });

const App = () => {
  
  // const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <Provider store={store}>
    {/* <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>    */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/packinglist" element={<PackingList />}></Route>
          <Route path="/notes" element={<Notes />}></Route> 
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/location" element={<Location />}></Route> 
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </Provider>
  );
};

export default App;
