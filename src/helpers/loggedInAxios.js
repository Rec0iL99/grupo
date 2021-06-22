/*
    - Axios instance if user IS logged in
    - Every request contains token in request headers
*/

import axios from 'axios';

/* eslint-disable import/no-anonymous-default-export */
export default (history = null) => {
  const client = process.env.REACT_APP_CLIENT;
  const server = process.env.REACT_APP_SERVER;

  const headers = {};

  if (localStorage.token) {
    headers['Content-Type'] = 'application/json';
    headers.Origin = client;
    headers['Access-Control-Allow-Credentials'] = true;
    headers.Authorization = `Bearer ${localStorage.token}`;
  } else {
    headers['Content-Type'] = 'application/json';
    headers.Origin = client;
    headers['Access-Control-Allow-Credentials'] = true;
  }

  const loggedInAxios = axios.create({
    baseURL: server,
    headers,
    withCredentials: true,
  });

  loggedInAxios.interceptors.response.use(
    (response) =>
      new Promise((resolve) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      // User is not authenticated or refresh token expired
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem('token');
        // Move user to /login
        if (history) {
          history.push('/login');
        } else {
          window.location = '/login';
        }
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  );

  return loggedInAxios;
};
