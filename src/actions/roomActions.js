import { socketClientActions } from '../utils/constants';
import {
  CREATE_ROOM_LOADING,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
} from './types';

export const createRoom = (socket, roomName, username) => (dispatch) => {
  dispatch({
    type: CREATE_ROOM_LOADING,
  });
  socket.emit(
    socketClientActions.CLIENT_CREATE_ROOM,
    roomName,
    username,
    (data) => {
      console.log(data);
    }
  );
};

export const joinRoom = () => {};

export const sendRoomMessage = () => {};
