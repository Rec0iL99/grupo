import {
  CREATE_ROOM_SUCCESS,
  JOIN_ROOM_SUCCESS,
  NEW_ROOM_MEMBER,
  NEW_ROOM_MESSAGE,
} from '../actions/types';

const initialState = {
  rooms: {},
};

const roomReducer = (state = initialState, action) => {
  let roomName;
  switch (action.type) {
    case CREATE_ROOM_SUCCESS:
      roomName = action.payload.config.roomName;
      return {
        ...state,
        rooms: { ...state.rooms, [roomName]: action.payload },
      };
    case JOIN_ROOM_SUCCESS:
      roomName = action.payload.config.roomName;
      return {
        ...state,
        rooms: { ...state.rooms, [roomName]: action.payload },
      };
    case NEW_ROOM_MEMBER:
      roomName = action.payload.roomName;
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [roomName]: {
            ...state.rooms[roomName],
            members: state.rooms[roomName].members.concat(
              action.payload.member
            ),
          },
        },
      };
    case NEW_ROOM_MESSAGE:
      roomName = action.payload.roomName;
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [roomName]: {
            ...state.rooms[roomName],
            messages: state.rooms[roomName].messages.concat(
              action.payload.roomMessage
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default roomReducer;
