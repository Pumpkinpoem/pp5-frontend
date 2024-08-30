import axios from "axios";

// Commented out the development URL
// const isDevelopment = window.location.hostname.includes("localhost") || window.location.hostname.includes("codeinstitute-ide");

// Set the base URL directly to the production server
axios.defaults.baseURL = 'https://cup-backend-3976f813200f.herokuapp.com/'; // Prod (Heroku)

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
