import axios from 'axios';

// Getting the endpoints from env
const clientURL = process.env.REACT_APP_CLIENT;
const server = process.env.REACT_APP_SERVER;

// Defining the headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Origin', clientURL);
headers.append('Access-Control-Allow-Credentials', 'true');

const axiosInstance = axios.create({
  baseURL: server,
  headers,
  withCredentials: true,
});

export default axiosInstance;
