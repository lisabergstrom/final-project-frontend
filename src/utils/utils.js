const BASE_URL = "http://localhost:8080";

const GET_ITEMS = BASE_URL + "/packinglist";
export const API_URL = (slug) => `${BASE_URL}/${slug}`;

export const API_GET_ITEMS = GET_ITEMS;
