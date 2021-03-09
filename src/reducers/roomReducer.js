import {
  CREATE_ROOM_LOADING,
  CREATE_ROOM_SUCCESS,
  ROOM_MESSAGE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  rooms: {},
  roomMessages: {},
};

const roomReducer = (state = initialState, action) => {
  let roomName;
  switch (action.type) {
    case CREATE_ROOM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ROOM_SUCCESS:
      roomName = action.payload.config.roomName;
      return {
        ...state,
        isLoading: false,
        rooms: { ...state.rooms, [roomName]: action.payload },
        roomMessages: { ...state.roomMessages, [roomName]: [] },
      };
    case ROOM_MESSAGE:
      roomName = action.payload.roomName;
      return {
        ...state,
        roomMessages: {
          ...state.roomMessages,
          [roomName]: state.roomMessages[roomName].concat(
            action.payload.roomMessage
          ),
        },
      };
    default:
      return state;
  }
};

export default roomReducer;
