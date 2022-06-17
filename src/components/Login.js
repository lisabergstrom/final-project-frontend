/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "utils/utils";

import openeye from "../assets/openeye.png";
import closedeye from "../assets/closedeye.png";

import "../login.css";

import {
  SectionContainer,
  FormContainer,
  Title,
  Button,
  ButtonMobile,
  MobileContainer,
  FormPMobile,
  FormP,
  InfoP,
  ErrorMessageContainer,
  ErrorMessage,
  ShowPassword,
  EyeButton,
  EyeSymbol,
} from "./LoginStyling";

import user from "reducers/user";

const Login = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [switchMode, setSwitchMode] = useState("login");
  const [isPanelActive, setIsPanelActive] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  // const [mode, setMode] = useState("login");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onToggleClick = () => {
    setValidationError("");
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
    };

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
              accessToken: data.accessToken,
            })
          );
        } else {
          dispatch(user.actions.setValidationError(data.response));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUserName(null));
          setValidationError(data.message);
        }
      });
  };

  return (
    <SectionContainer>
      <Title>TRAVEL JUNKIES</Title>
      <div className={`container ${isPanelActive ? "right-panel-active" : ""}`}>
        <div className="signup-container sign-up-container">
          <FormContainer onSubmit={onFormSubmit}>
            <MobileContainer>
              <FormPMobile>Have an account already?</FormPMobile>
              <ButtonMobile
                type="button"
                onClick={onToggleClick}
                id="login"
                Mode
              >
                Login
              </ButtonMobile>
            </MobileContainer>
            <h1>Create account</h1>
            <FormP>Welcome to our page!</FormP>
            <div className="input-container">
              <input
                className="input"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="user-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="input-container">
              <input
                className="input"
                id="password"
                type={!passwordShown ? "password" : "text"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="user-label" htmlFor="password">
                Password
              </label>
              <ShowPassword>
                <EyeButton type="button" onClick={togglePassword}>
                  <EyeSymbol src={passwordShown ? openeye : closedeye} />
                </EyeButton>
              </ShowPassword>
            </div>
            <Button type="submit" Mode>
              Submit
            </Button>
            <ErrorMessageContainer>
              <ErrorMessage>{validationError}</ErrorMessage>
            </ErrorMessageContainer>
          </FormContainer>
        </div>
        <div className="signup-container login-container">
          <FormContainer onSubmit={onFormSubmit}>
            <MobileContainer>
              <FormPMobile>Don't have an account?</FormPMobile>
              <ButtonMobile
                type="button"
                onClick={onToggleClick}
                id="signup"
                Mode
              >
                Signup
              </ButtonMobile>
            </MobileContainer>
            <h1>Log in</h1>
            <FormP>Welcome Back!</FormP>
            <div className="input-container">
              <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="user-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="input-container">
              <input
                className="input"
                type={passwordShown ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="user-label" htmlFor="password">
                Password
              </label>
              <ShowPassword>
                <EyeButton type="button" onClick={togglePassword}>
                  <EyeSymbol src={passwordShown ? openeye : closedeye} />
                </EyeButton>
              </ShowPassword>
            </div>
            <Button type="submit" Mode>
              Login
            </Button>
            <ErrorMessageContainer>
              <ErrorMessage>{validationError}</ErrorMessage>
            </ErrorMessageContainer>
          </FormContainer>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="panel panel-left">
              <h2>Already have a user?</h2>
              <InfoP>Please go to login instead</InfoP>
              <Button type="button" onClick={onToggleClick} id="login">
                Login
              </Button>
            </div>
            <div className="panel panel-right">
              <h2>Don't have an account?</h2>
              <InfoP>Click on signup to create one</InfoP>
              <Button type="button" onClick={onToggleClick} id="signup">
                signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Login;
