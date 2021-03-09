import { socketClientActions } from '../utils/constants';
import {
  CREATE_ROOM_LOADING,
  CREATE_ROOM_SUCCESS,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_LOADING,
  ROOM_MESSAGE,
} from './types';

export const createRoom = (socket, roomName, username) => (dispatch) => {
  dispatch({
    type: CREATE_ROOM_LOADING,
  });
  socket.emit(
    socketClientActions.CLIENT_CREATE_ROOM,
    roomName,
    username,
    (roomData) => {
      if (roomData) {
        console.log(roomData);
        dispatch({ type: CREATE_ROOM_SUCCESS, payload: roomData });
      }
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

export const sendRoomChatMessage = (
  socket,
  roomName,
  username,
  chatMessage
) => (dispatch) => {
  console.log(roomName, chatMessage);
  socket.emit(
    socketClientActions.CLIENT_ROOM_MESSAGE,
    roomName,
    username,
    chatMessage,
    (roomMessage) => {
      const data = { roomName, roomMessage };
      if (roomMessage) {
        dispatch({
          type: ROOM_MESSAGE,
          payload: data,
        });
      }
    }
  );
};

export const receiveRoomChatMessage = (socket) => (dispatch) => {};
