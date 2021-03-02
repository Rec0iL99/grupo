import { SOCKET_CONN_SUCCESS } from '../actions/types';

const initialState = {
  socket: null,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_CONN_SUCCESS:
      return {
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default socketReducer;
