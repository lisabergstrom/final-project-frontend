import React from "react";

import PackingListInput from "./PackingListInput";
import PackingListItems from "./PackingListItems";

const PackingList = () => {
  return (
    <div>
      <PackingListInput />
      <PackingListItems />
    </div>
  );
};

export default PackingList;

// **********************************

// import { useState } from "react";
// const PackingList = () => {
//   const [list, setList] = useState([]);
//   const [inputValue, setInputValue] = useState();

//   function handleSubmit() {
//     setList((oldItems) => {
//       return [...oldItems, inputValue];
//     });
//   }

//   const handleDelete = (item) => {
//     const newValues = list.filter((i) => i !== item);
//     setList(newValues);
//   };

//   return (
//     <div>
//       <h1>Vacation Packing List</h1>

//       <input type="text" onChange={(e) => setInputValue(e.target.value)} />
//       <button onClick={handleSubmit}>Add item</button>

//       {list.map((item) => (
//         <>
//           {" "}
//           <h1>{item}</h1>
//           <button onClick={(e) => handleDelete(item)}>remove item</button>
//         </>
//       ))}
//     </div>
//   );
// };

// export default PackingList;
