/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user from "reducers/user";
import Weather from "./Weather";
import TimeTicker from "./TickingClock";
import Footer from "./Footer";

// import paradise1 from "../assets/paradise1.jpg";

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);

  return (
    <>
     
       <Weather />
      <h1>Welcome!</h1>
      <TimeTicker />
      <div>{/* <img src={paradise1} alt="paradise" /> */}</div>
      <button
        type="button"
        onClick={() => {
          navigate("/login");
          dispatch(user.actions.setAccessToken(null));
        }}
      >
        Sign out
      </button>
      <Footer/>
    </>
  );
};

export default Main;
