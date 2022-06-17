import React from "react";
import Signout from "components/Signout";
import {
  Box,
  } from "../components/FooterStyles"
  
const Footer = () => {
  return (
    <Box>
      <h4 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "20px",
                   fontSize: "18px",
                   height: "60px",              
                   }}>
      Created by Emma, Terese and Lisa | Technigo Fontend Bootcamp 2022
      <Signout/>
      </h4>
     
    </Box>
   
  );
  
};
export default Footer;