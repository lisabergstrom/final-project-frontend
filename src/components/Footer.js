import React from "react";
import Signout from "components/Signout";
import {
  Box,
  } from "../components/FooterStyles"
  
const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       TRAVEL JUNKIES
      </h1> */}
      <h4 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "20px",
                   fontSize: "18px",
                   }}>
      Created by Emma, Terese and Lisa | Technigo Fontend Bootcamp 2022
      </h4>
      <Signout/>  
    </Box>
   
  );
  
};
export default Footer;