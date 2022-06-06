const BASE_URL = "http://localhost:8080";

const GET_NOTES = BASE_URL+"/notes"

//To get the login/sign in page
export const API_URL = (slug) => `${BASE_URL}/${slug}`;

//To get the notes from get request
export const API_GET_NOTES = GET_NOTES


