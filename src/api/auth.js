import loggedOutAxios from '../helpers/loggedOutAxios';
import loggedInAxios from '../helpers/loggedInAxios';

export const loginUser = async (loginData) => {
  const response = await loggedOutAxios.post('/users/login', loginData);
  return response.data;
};

export const signupUser = async (signUpData) => {
  const response = await loggedOutAxios.post('/users/signup', signUpData);
  return response.data;
};

export const preCheckUser = async (history) => {
  const response = await loggedInAxios(history).get('/users/precheck');
  return response.data;
};

export const logoutUser = async (history) => {
  const response = await loggedInAxios(history).get('/users/logout');
  return response.data;
};
