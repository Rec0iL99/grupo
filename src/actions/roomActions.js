import { socketClientActions } from '../utils/constants';
import { CREATE_ROOM_LOADING, JOIN_ROOM_LOADING } from './types';

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

export const joinRoom = (socket, roomCode, username) => (dispatch) => {
  dispatch({
    type: JOIN_ROOM_LOADING,
  });
  socket.emit(
    socketClientActions.CLIENT_JOIN_ROOM,
    roomCode,
    username,
    (data) => {
      console.log(data);
    }
  );
};

export const sendRoomMessage = () => {};
