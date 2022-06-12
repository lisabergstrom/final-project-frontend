/* eslint-disable */
const BASE_URL = "http://localhost:8080"

const GET_LIST = BASE_URL+"/packinglist"

export const API_URL = (slug) => `${BASE_URL}/${slug}`

export const API_GET_LIST = GET_LIST
const GET_NOTES = BASE_URL+"/notes"
const DELETE_NOTES = (notesId) => `${GET_NOTES}/${notesId}`


//To get the notes from get request
export const API_GET_NOTES = GET_NOTES
export const API_DELETE_NOTES = DELETE_NOTES


