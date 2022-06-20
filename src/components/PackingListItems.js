/* eslint-disable */
// import React, { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import {EmptyMessage} from "./PackinglistStyles";

// import { API_GET_LIST, API_DELETE_LIST, API_CHECK_LIST } from "utils/utils"

// import packinglist from "../reducers/packinglist"


// const PackingListItems = () => {
//   const listItem = useSelector((store) => store.packinglist.items)
//   const accessToken = useSelector((store) => store.user.accessToken)
//   const userId = useSelector((store) => store.user.userId)

//   const dispatch = useDispatch()

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         "Authorization": accessToken
//       }
//     }

//     fetch(API_GET_LIST, options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           dispatch(packinglist.actions.setListItem(data))
//           dispatch(packinglist.actions.setErrors(null))
//         } else {
//           dispatch(packinglist.actions.setListItem([]))
//           dispatch(packinglist.actions.setErrors(data))
//         }
//       })

//   }, [accessToken, userId, dispatch])

//  const deleteItem = (listId) => {
//   const options = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': accessToken
//     },
//     body: JSON.stringify({ user: userId, })
//   }

//   fetch(API_DELETE_LIST(listId), options)
//   .then((res) => res.json())
//   .then((data) => {
//     if (data) {
//       dispatch(packinglist.actions.deleteListItem(listId))
//       dispatch(packinglist.actions.setErrors(null))
//     } else {
//       dispatch(packinglist.actions.setListItem([]))
//       dispatch(packinglist.actions.setErrors(data.response))
//     }
//   })  
//  }

//  const onToggleItem = (listId, isCompleted) => {
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify({
//       isCompleted,
//       _id: listId,
//       new: true
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': accessToken
//     }
//   }
//   console.log(API_CHECK_LIST(listId))
//   fetch(API_CHECK_LIST(listId), options)
//   .then((res) => res.json())
//   .then((data) => {
//     if(data.success) {
//       dispatch(packinglist.actions.toggleItem(listId))
//       dispatch(packinglist.actions.setErrors(null))
//     } else {
//       dispatch(packinglist.actions.setErrors(data.response))
//     }
//   })
//  }

 

//   if (listItem.length > 0)
//     return (
//       <div>
//         <h4>My packinglist</h4>
//         {listItem &&
//           listItem.map((item) => (
//             <div>
//               <div>
//                 <p>{item.heading}</p>
//                 <p>{item.message}</p>
//               </div>
//               <button onClick={() => deleteItem(item._id)}>Delete</button>
//               <input
//               type="checkbox"
//               checked={item.isCompleted}
//               onChange={() => onToggleItem(item._id, !item.isCompleted)}
//               />
//             </div>
//           ))}
//       </div>
//     )

//     return (
//       <EmptyMessage>
//         <h4>Your packinglist is empty</h4>
//         <p>Start adding items for your next adventure</p>
//       </EmptyMessage>
//     )
// };

// export default PackingListItems;

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {EmptyMessage} from "./PackinglistStyles";
import { API_GET_LIST, API_DELETE_LIST, API_CHECK_LIST } from "utils/utils"

import { AnswerArea,IsPacked, Label, Checkmark, DeleteButton, AnswerP, AnswerText, AnswerHeader } from "./PackinglistStyles";

import packinglist from "../reducers/packinglist"
const PackingListItems = () => {
  const listItem = useSelector((store) => store.packinglist.items)
  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)
  const dispatch = useDispatch()
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Authorization": accessToken
      }
    }
    fetch(API_GET_LIST, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(packinglist.actions.setListItem(data))
          dispatch(packinglist.actions.setErrors(null))
        } else {
          dispatch(packinglist.actions.setListItem([]))
          dispatch(packinglist.actions.setErrors(data))
        }
      })
  }, [accessToken, userId, dispatch])
 const deleteItem = (listId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    },
    body: JSON.stringify({ user: userId, })
  }
  fetch(API_DELETE_LIST(listId), options)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      dispatch(packinglist.actions.deleteListItem(listId))
      dispatch(packinglist.actions.setErrors(null))
    } else {
      dispatch(packinglist.actions.setListItem([]))
      dispatch(packinglist.actions.setErrors(data.response))
    }
  })
 }
 const onToggleItem = (listId, isCompleted) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      isCompleted,
      _id: listId,
      new: true
    }),
    headers: {
      "Content-Type": "application/json",
      'Authorization': accessToken
    }
  }
  console.log(API_CHECK_LIST(listId))
  fetch(API_CHECK_LIST(listId), options)
  .then((res) => res.json())
  .then((data) => {
    if(data.success) {
      dispatch(packinglist.actions.toggleItem(listId))
      dispatch(packinglist.actions.setErrors(null))
    } else {
      dispatch(packinglist.actions.setErrors(data.response))
    }
  })
 }
  if (listItem.length > 0)
    return (
          <div>
              {listItem &&
          listItem.map((item) => (
            <AnswerArea key={item._id}>
              <AnswerText>
                <AnswerHeader>{item.heading}</AnswerHeader>
                <AnswerP>{item.message}</AnswerP>
              </AnswerText>
              <Label> Packed
              <IsPacked
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onToggleItem(item._id, !item.isCompleted)}
              />
              <Checkmark></Checkmark>
              </Label>
              <DeleteButton onClick={() => deleteItem(item._id)}><span role='img' aria-label='delete'>🗑</span></DeleteButton>
            </AnswerArea>
          ))}
      </div>
    )
    return (
      <EmptyMessage>
        <h4>Your packinglist is empty</h4>
        <p>Start adding items for your next adventure</p>
      </EmptyMessage>
    )
};
export default PackingListItems;
