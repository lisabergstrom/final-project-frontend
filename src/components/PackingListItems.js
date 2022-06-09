/* eslint-disable */
import React, { useState, useEffect } from "react";
import { API_GET_ITEMS } from "utils/utils";
import packingList from "../reducers/packinglist";

const PackingListItems = () => {
  const [itemList, setItemList] = useState();

  useEffect(() => {
    fetchItems();
  }, []);

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "677d30f8bce32a50cfafa4db533792a125085ab6cd2ce6bd62e628226db794647d672cbfac95d90e7697f049c5e2d3ed795875e77bdc3648fe3455e49b76542d52f21dd4f7f4b94baf97a4681764fe01326f228219dabbafc8bfe6d49b8477eeb6037f267abce8126ffbc947fd647c016194ada8d59dfa3283e63ab8d4495188",
    },
  };

  const fetchItems = () => {
    fetch(API_GET_ITEMS, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItemList(data);
      });
  };

  fetchItems();
  //   return (
  //       <div>
  //           {noteList.map((data) => (
  //               <div>
  //                 <div>key={data._id}</div>
  //                 <h3>{data.header}</h3>
  //                 <p>{data.message}</p>
  //                 <p>{data.tags}</p>
  //               </div>
  //           ))}

  //       </div>

  //   )
};

export default PackingListItems;
