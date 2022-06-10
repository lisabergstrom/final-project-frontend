const BASE_URL = "http://localhost:8080";

const GET_NOTES = BASE_URL+"/notes"
const DELETE_NOTES = (notesId) => `${BASE_URL}/notes/${notesId}`
//const DELETE_NOTES = BASE_URL+`/notes${notes._id}`

//To get the login/sign in page
export const API_URL = (slug) => `${BASE_URL}/${slug}`;

//To get the notes from get request
export const API_GET_NOTES = GET_NOTES
export const API_DELETE_NOTES = DELETE_NOTES


