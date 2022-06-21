import React, {useEffect} from "react";
import user from "reducers/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

export const SignOut = styled.button`
padding: 3px 16px;
cursor: pointer;
font-family: 'Comic Neue',cursive;
background-color: #C2E8CE;
border-radius: 20px;
border: none;
font-size: 10px;

@media (min-width: 768px) {
  padding: 8px 22px;
    font-size: 14px;
    margin-left: 49px;
}

@media(min-width:1024px) {
  font-size: 14px;
  margin-left: 54px;
  }

`
const Signout = () => {
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      if (!accessToken) {
        navigate("/login");
      }
    }, [accessToken, navigate]);
    return (
        <SignOut
        type="button"
        onClick={() => {
          navigate("/login");
          dispatch(user.actions.setAccessToken(null))
          localStorage.removeItem('user');
        }}
      >
        Sign out
      </SignOut>
    )
}
export default Signout;









