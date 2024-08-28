import axios from "axios";

// Detect if we are in development or production
const isDevelopment = window.location.hostname.includes("localhost") || window.location.hostname.includes("codeinstitute-ide");

axios.defaults.baseURL = isDevelopment 
  ? 'https://8000-pumpkinpoem-pp5backend-8x5au98s9un.ws.codeinstitute-ide.net' // Dev (Gitpod)
  : 'https://cup-backend-3976f813200f.herokuapp.com/'; // Prod (Heroku)

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
