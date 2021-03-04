import { CREATE_ROOM_LOADING, CREATE_ROOM_SUCCESS } from '../actions/types';

const initialState = {
  isLoading: false,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM_LOADING:
      return {
        isLoading: true,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        rooms: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
