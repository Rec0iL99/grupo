import create from 'zustand';
import { devtools } from 'zustand/middleware';

/* eslint-disable import/no-mutable-exports */
let useSocket = (set) => ({
  socket: null,
  setSocket: (socket) => set(() => ({ socket })),
});

if (process.env.REACT_APP_ENV === 'development') {
  useSocket = devtools(useSocket);
}

useSocket = create(useSocket);

export default useSocket;
