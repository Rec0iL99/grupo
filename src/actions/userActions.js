import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACTION_RESET,
} from './types';
import axiosInstance from '../helpers/axiosInstance';
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
  const dataToServer = {
    issuer: authData.issuer,
    accessToken: authData.accessToken,
  };

  axiosInstance
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
