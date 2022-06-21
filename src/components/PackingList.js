import React from "react";

import PackingListInput from "./PackingListInput";
import PackingListItems from "./PackingListItems";
import Navbar from "./Navbar";
import Footer from "./Footer";


const PackingList = () => {
  return (
   <div>
       <Navbar />
      <PackingListInput />
      <PackingListItems />
      <Footer/>
    </div>
  );
};

export default PackingList;
