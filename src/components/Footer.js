// import React from "react";
// import Signout from "components/Signout";
// import {
//   Box,
//   } from "../components/FooterStyles"
  
// const Footer = () => {
//   return (
//     <Box>
//       {/* <h1 style={{ color: "white", 
//                    textAlign: "center", 
//                    marginTop: "-50px" }}>
//        TRAVEL JUNKIES
//       </h1> */}
//       <h4 style={{ color: "white", 
//                    textAlign: "center", 
//                    marginTop: "20px",
//                    fontSize: "18px",
//                    }}>
//       Created by Emma, Terese and Lisa | Technigo Fontend Bootcamp 2022
//       </h4>
//       <Signout/>  
//     </Box>
   
//   );
  
// };
// export default Footer;

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
                   height: "50px",
                   position: "fixed",
                    left: 0,
                    bottom: 0,
                    width:"100%",
                    background: "#212529",
                    margin:"0",
                    padding:"8px",
                    display:"flex",
                    justifyContent: "center"
                   }}>
      Created by Emma, Terese and Lisa | Technigo Fontend Bootcamp 2022
      <Signout/>
      </h4>
      </Box>
  );
};
export default Footer;
