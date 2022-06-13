import React, {useEffect} from "react";
import user from "reducers/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


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
        <button
        type="button"
        onClick={() => {
          navigate("/login");
          dispatch(user.actions.setAccessToken(null))
          localStorage.removeItem('user');
        }}
      >
        Sign out
      </button>
    )
}

export default Signout;