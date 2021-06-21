import { socketClientActions } from '../utils/constants';

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
