import axios from 'axios';

// Getting the endpoints from env
const client = process.env.REACT_APP_CLIENT;
const server = process.env.REACT_APP_SERVER;

// Defining the headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Origin', client);
headers.append('Access-Control-Allow-Credentials', 'true');

const loggedOutAxios = axios.create({
  baseURL: server,
  headers,
  withCredentials: true,
});

export default loggedOutAxios;
