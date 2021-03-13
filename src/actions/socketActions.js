import io from 'socket.io-client';
import { socketServerActions } from '../utils/constants';
import { SOCKET_CONN_SUCCESS, SOCKET_CONN_FAIL } from './types';

// Action for connecting with socket server
export const connectToSocketServer = () => (dispatch) => {
  const options = {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      },
    },
  };
  let socket = io(process.env.REACT_APP_SERVER, options);
  socket.on(socketServerActions.SERVER_CONNECTION_SUCCESS, (data) => {
    console.log('conn success');
    dispatch({
      type: SOCKET_CONN_SUCCESS,
      payload: socket,
    });
  });
  socket.on('connect_error', (error) => {
    console.log(error.message);
    dispatch({
      type: SOCKET_CONN_FAIL,
      payload: error.message,
    });
  });
};
