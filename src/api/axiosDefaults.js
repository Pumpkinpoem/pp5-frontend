import axios from "axios";


// heroku def deployed 
// axios.defaults.baseURL = 'https://cup-backend-3976f813200f.herokuapp.com/'

// gitpod drf workspace
axios.defaults.baseURL = 'https://8000-pumpkinpoem-pp5backend-8x5au98s9un.ws.codeinstitute-ide.net'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();
