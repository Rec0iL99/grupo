import io from 'socket.io-client';
import { socketServerActions } from '../utils/constants';

export const socketConnection = (cb) => {
  const options = {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      },
    },
  };

  const socket = io(process.env.REACT_APP_SERVER, options);

  if (!socket) return false;

  if (socket) {
    socket.on(socketServerActions.SERVER_CONNECTION_SUCCESS, () => {
      return cb(null, {
        message: socketServerActions.SERVER_CONNECTION_SUCCESS,
        socket,
      });
    });

    socket.on('connect_error', () => {
      return cb({ message: socketServerActions.SERVER_CONNECTION_FAIL }, null);
    });
  }
};
