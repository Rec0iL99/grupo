import create from 'zustand';
import { devtools } from 'zustand/middleware';

let useRooms = (set) => ({
  rooms: {},
  setRooms: (room) =>
    set((state) => ({ ...state.rooms, [room.config.roomName]: room })),
});

if (process.env.REACT_APP_ENV === 'development') {
  useRooms = devtools(useRooms);
}

useRooms = create(useRooms);

export default useRooms;
