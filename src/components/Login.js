/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "utils/utils";
import Hero from "./Hero"
import Footer from "./Footer";

import user from "reducers/user";

const Login = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [switchMode, setSwitchMode] = useState("login");
  const [isPanelActive, setIsPanelActive] = useState("");
  const [validationError, setValidationError] = useState(null);

  // const [mode, setMode] = useState("login");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onToggleClick = () => {
    setErrorMessage("");
    setUsername("");
    setPassword("");
    setPasswordShown(false);
    if (switchMode === "login") {
      setSwitchMode("signup");
      setIsPanelActive(true);
    } else {
      setSwitchMode("login");
      setIsPanelActive(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }

    fetch(API_URL(switchMode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
            dispatch(user.actions.setAccessToken(data.accessToken));
          
            dispatch(user.actions.setUserId(data.userId));
            
            dispatch(user.actions.setUserName(data.username));
            dispatch(user.actions.setError(null));
            setValidationError(data.message);

            localStorage.setItem(
              "user",
              JSON.stringify({
                userId: data.userId,
                username: data.username,
                accessToken: data.accessToken
              })
            )
        } else {
            dispatch(user.actions.setError(data.response));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserName(null));
            setValidationError(data.message);
        }
      });
  };

  return (
    <section>
      <Hero/>
      <div className={`container ${isPanelActive ? "right-panel-active" : ""}`}>
      <h1>Sign in or Sign up</h1>
      <div className="radio-container">
        <label htmlFor="register">Register</label>
        <button
          type="button"
          id="register"
          onClick={onToggleClick}
          switchMode
        />
  
  



        <label htmlFor="login">Login</label>
        <button
         type="button"
         onClick={onToggleClick}
         id="login"
         Mode
       >
         Login
        
        </button>




 
        
      <h1>Create account</h1>
            <h1>Welcome to our page!</h1>

      </div>
      <form onSubmit={onFormSubmit}>
        <div className="input-field">
          <label htmlFor="username">
            Username
            <span className="required">* </span>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">
            Password
            <span className="required">* </span>
          </label>
          <input
            // type="password"
            id="password"
            type={!passwordShown ? "password" : "text"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {validationError !== null && (
          <p className="error-message">{validationError}</p>
        )}
              <div>
                <button type="button" onClick={togglePassword}>
                  {/* <span src={passwordShown ? unVisibleEye : visibleEye} /> */}
                </button>
              </div>

        <button type="submit">Submit</button>
      </form>
      <div className="overlay-container">
          <div className="overlay">
            <div className="panel panel-left">
              <h2>Already have a user?</h2>
              <p>Please go to login instead</p>
              <button type="button" onClick={onToggleClick} id="login">
                Login
              </button>
            </div>
            <div className="panel panel-right">
              <h2>Don't have an account?</h2>
              <p>Click on signup to create one</p>
              <button type="button" onClick={onToggleClick} id="signup">
                signup
              </button>
            </div>
          </div>
          </div>

      </div>
     <Footer/>



    </section>
 
  );
};

export default Login;
