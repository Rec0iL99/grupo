import { socketClientActions, socketServerActions } from '../utils/constants';
import {
  CREATE_ROOM_LOADING,
  CREATE_ROOM_SUCCESS,
  JOIN_ROOM_LOADING,
  JOIN_ROOM_SUCCESS,
  NEW_ROOM_MESSAGE,
  NEW_ROOM_MEMBER,
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
    (roomData) => {
      console.log(roomData);
      if (roomData) {
        dispatch({
          type: JOIN_ROOM_SUCCESS,
          payload: roomData,
        });
      }
    }
  );
};

export const newRoomMember = (socket) => (dispatch) => {
  socket
    .off(socketServerActions.SERVER_NEW_ROOM_MEMBER)
    .on(socketServerActions.SERVER_NEW_ROOM_MEMBER, (data) => {
      if (data) {
        dispatch({
          type: NEW_ROOM_MEMBER,
          payload: data,
        });
      }
    });
};

export const newRoomMessage = (socket) => (dispatch) => {
  socket
    .off(socketServerActions.SERVER_NEW_ROOM_MESSAGE)
    .on(socketServerActions.SERVER_NEW_ROOM_MESSAGE, (data) => {
      if (data) {
        dispatch({
          type: NEW_ROOM_MESSAGE,
          payload: data,
        });
      }
    });
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
        // dispatch({
        //   type: ROOM_MESSAGE,
        //   payload: data,
        // });
      }
    }
  );
};

export const receiveRoomChatMessage = (socket) => (dispatch) => {};
