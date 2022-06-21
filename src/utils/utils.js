const BASE_URL = "https://finalproject-let.herokuapp.com"

const GET_NOTES = BASE_URL+"/notes"
const DELETE_NOTES = (notesId) => `${GET_NOTES}/${notesId}`

const GET_LIST = BASE_URL+"/packinglist"
const DELETE_LIST = (listId) => `${GET_LIST}/${listId}`
const CHECK_LIST = (listId) => `${GET_LIST}/${listId}/completed`



export const API_URL = (slug) => `${BASE_URL}/${slug}`

//To get the notes from get request and post new items
export const API_GET_NOTES = GET_NOTES
//To delete notes
export const API_DELETE_NOTES = DELETE_NOTES
//To get the items from packinglist and post new items
export const API_GET_LIST = GET_LIST
//To delete item from list
export const API_DELETE_LIST = DELETE_LIST
//To toggle checked or unchecked
export const API_CHECK_LIST = CHECK_LIST


