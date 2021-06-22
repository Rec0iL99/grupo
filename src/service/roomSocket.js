import { socketClientActions, socketServerActions } from '../utils/constants';

export const createRoom = (socket, roomName, cb) => {
  if (!socket) return false;

  socket.emit(socketClientActions.CLIENT_CREATE_ROOM, roomName, (data) => {
    if (data) {
      return cb(null, data);
    }

    // Create room fail
    return cb(data, null);
  });
};

export const joinRoom = (socket, roomCode, cb) => {
  if (!socket) return false;

  socket.emit(socketClientActions.CLIENT_JOIN_ROOM, roomCode, (data) => {
    if (data) {
      return cb(null, data);
    }

    // Join room fail
    return cb(data, null);
  });
};

export const sendRoomChatMessage = (socket, roomName, chatMessage, cb) => {
  if (!socket) return false;

  socket.emit(
    socketClientActions.CLIENT_ROOM_MESSAGE,
    roomName,
    chatMessage,
    (data) => {
      if (data) {
        return cb(null, data);
      }

      // Send room chat message fail
      return cb(data, null);
    }
  );
};

export const roomMemberListener = (socket, cb) => {
  if (!socket) return false;

  socket
    .off(socketServerActions.SERVER_NEW_ROOM_MEMBER)
    .on(socketServerActions.SERVER_NEW_ROOM_MEMBER, (data) => {
      if (data) {
        return cb(null, data);
      }

      // Room member listening fail
      return cb(data, null);
    });
};

export const roomMessageListener = (socket, cb) => {
  if (!socket) return false;

  socket
    .off(socketServerActions.SERVER_NEW_ROOM_MESSAGE)
    .on(socketServerActions.SERVER_NEW_ROOM_MESSAGE, (data) => {
      if (data) {
        return cb(null, data);
      }

      // Room message listening fail
      return cb(data, null);
    });
};
