import {
  CREATE_ROOM_LOADING,
  CREATE_ROOM_SUCCESS,
  ROOM_MESSAGE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  roomMessagesArray: [],
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    case ROOM_MESSAGE:
      return {
        ...state,
        roomMessagesArray: state.roomMessagesArray.concat(action.payload),
      };
    default:
      return state;
  }
};

export default roomReducer;
