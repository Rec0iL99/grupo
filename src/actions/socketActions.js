import io from 'socket.io-client';
import { SOCKET_CONN_SUCCESS } from './types';

export const connectToSocketServer = () => (dispatch) => {
  let socket = io(process.env.REACT_APP_SERVER);
  dispatch({
    type: SOCKET_CONN_SUCCESS,
    payload: socket,
  });
};
