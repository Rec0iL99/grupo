import create from 'zustand';
import { devtools } from 'zustand/middleware';

let useRooms = (set) => ({
  rooms: {},
  setRooms: (room) =>
    set((state) => ({
      rooms: { ...state.rooms, [room.config.roomName]: room },
    })),
  setRoomMembers: (roomName, newRoomMember) =>
    set((state) => ({
      rooms: {
        ...state.rooms,
        [roomName]: {
          ...state.rooms[roomName],
          members: state.rooms[roomName].members.concat(newRoomMember),
        },
      },
    })),
  setRoomMessages: (roomName, newRoomMessage) =>
    set((state) => ({
      rooms: {
        ...state.rooms,
        [roomName]: {
          ...state.rooms[roomName],
          messages: state.rooms[roomName].messages.concat(newRoomMessage),
        },
      },
    })),
});

if (process.env.REACT_APP_ENV === 'development') {
  useRooms = devtools(useRooms);
}

useRooms = create(useRooms);

export default useRooms;
