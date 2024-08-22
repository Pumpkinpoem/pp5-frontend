import axios from "axios";


axios.defaults.baseURL = 'https://cup-backend-3976f813200f.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true