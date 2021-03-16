import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  PRECHECK_LOADING,
  PRECHECK_SUCCESS,
  PRECHECK_FAIL,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  ACTION_RESET,
} from './types';
import loggedOutAxios from '../helpers/loggedOutAxios';
import loggedInAxios from '../helpers/loggedInAxios';
import { SERVER_DOWN } from '../utils/constants';

export const userActionReset = () => {
  return {
    type: ACTION_RESET,
  };
};

// Action for user login
export const loginUser = (authData) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  // Data to be sent to server
  let dataToServer;

  if (authData.issuer === 'github') {
    dataToServer = {
      issuer: authData.issuer,
      accessCode: authData.accessCode,
    };
  }

  loggedOutAxios
    .post('/users/login', dataToServer)
    .then((response) => {
      localStorage.token = response.data.payload.accessToken;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response ? error.response.data : SERVER_DOWN,
      });
    });
};

// Action for user signup
export const signupUser = (authData) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });

  loggedOutAxios
    .post('/users/signup', authData)
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response ? error.response.data : SERVER_DOWN,
      });
    });
};

// Precheck user
export const preCheckUser = (history) => (dispatch) => {
  dispatch({ type: PRECHECK_LOADING });

  loggedInAxios(history)
    .get('/users/precheck')
    .then((response) => {
      localStorage.token = response.data.payload.accessToken;
      dispatch({ type: PRECHECK_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: PRECHECK_FAIL,
        payload: error.response ? error.response.data : SERVER_DOWN,
      });
    });
};

// Logout user
export const logoutUser = (history) => (dispatch) => {
  dispatch({ type: LOGOUT_LOADING });

  loggedInAxios(history)
    .get('/users/logout')
    .then((response) => {
      dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: LOGOUT_FAIL,
        payload: error.response ? error.response.data : SERVER_DOWN,
      });
    });
};
