/* eslint-disable */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { API_GET_LIST } from "utils/utils"

import packinglist from "../reducers/packinglist"


const PackingListItems = () => {
  const listItem = useSelector((store) => store.packinglist.items)
  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(accessToken)
    const options = {
      method: "GET",
      headers: {
        "Authorization": accessToken
      }
    }

    fetch(API_GET_LIST, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(packinglist.actions.setListItem(data))
          dispatch(packinglist.actions.setErrors(null))
        } else {
          dispatch(packinglist.actions.setListItem([]))
          dispatch(packinglist.actions.setErrors(data))
        }
      })

  }, [accessToken, userId, dispatch]);



  if (listItem.length > 0)
    return (
      <div>
        <h4>My packinglist</h4>
        {listItem &&
          listItem.map((item) => (
            <div>
              <div>
                <p>{item.heading}</p>
                <p>{item.message}</p>
              </div>
              <button>Delete</button>
            </div>
          ))}
      </div>
    )

    return (
      <div>
        <h4>Your packinglist is empty</h4>
        <p>Start adding items for your next adventure</p>
      </div>
    )
};

export default PackingListItems;
